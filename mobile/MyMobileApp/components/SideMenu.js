import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SideMenu({ visible, closeMenu }) {
  const navigation = useNavigation();

  const slide = useRef(new Animated.Value(-width)).current;

  const [industries, setIndustries] = useState([]);
  const [categories, setCategories] = useState({});
  const [openCategory, setOpenCategory] = useState(null);

  // =========================
  // GET INDUSTRIES
  // =========================
  const getIndustry = async () => {
    try {
      console.log("Calling Industry API");

      const response = await fetch(
        "http://192.168.1.2:5000/api/industries"
      );

      const result = await response.json();

      console.log("Industries:", result.data);

      setIndustries(result.data || []);
    } catch (error) {
      console.log("Industry API Error:", error);
    }
  };

  // =========================
  // GET CATEGORIES
  // =========================
  const getCategories = async (industryId) => {
    try {
      console.log("Getting categories:", industryId);

      const response = await fetch(
        `http://192.168.1.2:5000/api/categories/industry/${industryId}`
      );

      const result = await response.json();

      console.log("Categories:", result.data);

      setCategories((prev) => ({
        ...prev,
        [industryId]: result.data || [],
      }));
    } catch (error) {
      console.log("Category API Error:", error);
    }
  };

  // =========================
  // LOAD INDUSTRIES
  // =========================
  useEffect(() => {
    getIndustry();
  }, []);

  // =========================
  // SIDE MENU ANIMATION
  // =========================
  useEffect(() => {
    if (visible) {
      Animated.timing(slide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  // =========================
  // OPEN / CLOSE INDUSTRY
  // =========================
  const handleIndustryPress = (industryId) => {
    if (openCategory === industryId) {
      setOpenCategory(null);
      return;
    }

    setOpenCategory(industryId);

    // API call only first time
    if (!categories[industryId]) {
      getCategories(industryId);
    }
  };

  // =========================
  // CATEGORY CLICK
  // =========================
  const handleCategoryPress = (category) => {
    closeMenu();

    navigation.navigate("Category", {
      categoryId: category.id,
      categoryName: category.category_name,
    });
  };

  return (
    <View style={styles.overlay}>

      {/* Dark Background */}
      <TouchableOpacity
        style={styles.background}
        onPress={closeMenu}
        activeOpacity={1}
      />

      {/* Side Menu */}
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [
              {
                translateX: slide,
              },
            ],
          },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* TITLE */}
          <Text style={styles.title}>Menu</Text>

          {/* HOME */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeMenu();
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>

          {/* ABOUT */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeMenu();
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>

          {/* INDUSTRIES */}
          {industries.map((industry) => (
            <View key={industry.id}>

              {/* INDUSTRY */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleIndustryPress(industry.id)}
              >
                <Text style={styles.text}>
                  {industry.industry_name}
                </Text>

                <Text style={styles.arrow}>
                  {openCategory === industry.id ? "−" : "+"}
                </Text>
              </TouchableOpacity>

              {/* CATEGORIES */}
              {openCategory === industry.id && (
                <View style={styles.submenu}>

                  {categories[industry.id] ? (
                    categories[industry.id].length > 0 ? (

                      categories[industry.id].map((category) => (
                        <TouchableOpacity
                          key={category.id}
                          style={styles.subitem}
                          onPress={() =>
                            handleCategoryPress(category)
                          }
                        >
                          <Text style={styles.subitemText}>
                            {category.category_name}
                          </Text>
                        </TouchableOpacity>
                      ))

                    ) : (

                      <Text style={styles.noData}>
                        No categories found
                      </Text>

                    )
                  ) : (

                    <Text style={styles.loading}>
                      Loading...
                    </Text>

                  )}

                </View>
              )}

            </View>
          ))}

        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },

  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  menu: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,

    width: "100%",

    backgroundColor: "#fff",

    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 16,

    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  text: {
    fontSize: 17,
  },

  arrow: {
    fontSize: 22,
    fontWeight: "bold",
  },

  submenu: {
    paddingLeft: 20,
    backgroundColor: "#fafafa",
  },

  subitem: {
    paddingVertical: 12,

    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  subitemText: {
    fontSize: 15,
    color: "#444",
  },

  loading: {
    paddingVertical: 12,
    color: "#888",
  },

  noData: {
    paddingVertical: 12,
    color: "#888",
  },
});