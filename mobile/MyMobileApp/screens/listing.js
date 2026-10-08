import React from "react";

import ImageSlider from "../components/ImageSlider";
import CategorySlider from "../components/CategorySlider";
import CategoryGrid from "../components/CategoryGrid";
import StaticImageSlider from "../components/StaticImageSlider";

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home({ navigation, route }) {
  const setScrollY = route?.params?.setScrollY || (() => {});






const mens = [
  
  
  
  {
    name: "Premium Running Shoes",
    image: require("../assets/image1.jpg"),

    sellingPrice: 2999,
    mrp: 4999,
    discount: 40,

    rating: 4,
    reviews: 125,

    colors: [
      "#000000",
      "#ffffff",
      "#ff0000",
    ],

    sizes: [
      "6",
      "7",
      "8",
      "9",
      "10",
    ],
  },

  {
    name: "Casual Sneakers",
    image: require("../assets/image1.jpg"),

    sellingPrice: 1999,
    mrp: 3499,
    discount: 43,

    rating: 5,
    reviews: 86,

    colors: [
      "#000000",
      "#808080",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
    ],
  },
  
  
  {
    name: "Casual Sneakers",
    image: require("../assets/image1.jpg"),

    sellingPrice: 1999,
    mrp: 3499,
    discount: 43,

    rating: 5,
    reviews: 86,

    colors: [
      "#000000",
      "#808080",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
    ],
  },
  
  
  {
    name: "Casual Sneakers",
    image: require("../assets/image1.jpg"),

    sellingPrice: 1999,
    mrp: 3499,
    discount: 43,

    rating: 5,
    reviews: 86,

    colors: [
      "#000000",
      "#808080",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
    ],
  },
  
  
  {
    name: "Casual Sneakers",
    image: require("../assets/image1.jpg"),

    sellingPrice: 1999,
    mrp: 3499,
    discount: 43,

    rating: 5,
    reviews: 86,

    colors: [
      "#000000",
      "#808080",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
    ],
  },
  
  
  {
    name: "Casual Sneakers",
    image: require("../assets/image1.jpg"),

    sellingPrice: 1999,
    mrp: 3499,
    discount: 43,

    rating: 5,
    reviews: 86,

    colors: [
      "#000000",
      "#808080",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
    ],
  },
];




  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      onScroll={(e) => {
        setScrollY(e.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
		

		<Image source={require("../assets/banner1.jpg")} style={styles.banner} />


        {/* Sale Products */}
        <Text style={styles.title}>
          SALE PRODUCTS
        </Text>

        
        
	   
<CategoryGrid title="MENS COLLECTION" items={mens} />
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({


banner: { width: "100%", height: 150, resizeMode: "cover", borderRadius: 10, marginTop: 10, },
  scroll: {
    flexGrow: 1,
    paddingBottom: 50,
  },

  container: {
    flex: 1,
    padding: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  categoryBox: {
    alignItems: "center",
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },

  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  Subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 5,
  },

  text: {
    fontSize: 16,
    marginVertical: 15,
  },

});
