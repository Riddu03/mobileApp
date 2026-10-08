import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomFooter = ({
  activeTab = "Home",
  cartCount = 2,
  onNavigate,
}) => {
  const insets = useSafeAreaInsets();

  const tabs = [
    {
      name: "Home",
      icon: "home-outline",
      activeIcon: "home",
    },
    {
      name: "Categories",
      icon: "grid-outline",
      activeIcon: "grid",
    },
    {
      name: "Cart",
      icon: "cart-outline",
      activeIcon: "cart",
    },
    {
      name: "Wishlist",
      icon: "heart-outline",
      activeIcon: "heart",
    },
    {
      name: "Account",
      icon: "person-outline",
      activeIcon: "person",
    },
  ];

  return (
    <View
      style={[
        styles.footer,
        {
          paddingBottom: insets.bottom,
          height: 72 + insets.bottom,
        },
      ]}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        const isCart = tab.name === "Cart";

        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.8}
            style={[
              styles.tab,
              isCart && styles.cartTabContainer,
            ]}
            onPress={() =>
              onNavigate && onNavigate(tab.name)
            }
          >
            {isCart ? (
              <>
                <View
                  style={[
                    styles.cartButton,
                    isActive && styles.cartButtonActive,
                  ]}
                >
                  <Ionicons
                    name={
                      isActive
                        ? tab.activeIcon
                        : tab.icon
                    }
                    size={28}
                    color="#FFFFFF"
                  />

                  {cartCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {cartCount > 99
                          ? "99+"
                          : cartCount}
                      </Text>
                    </View>
                  )}
                </View>

                <Text
                  style={[
                    styles.label,
                    styles.cartLabel,
                    isActive && styles.activeLabel,
                  ]}
                >
                  Cart
                </Text>
              </>
            ) : (
              <>
                <Ionicons
                  name={
                    isActive
                      ? tab.activeIcon
                      : tab.icon
                  }
                  size={23}
                  color={
                    isActive
                      ? "#111111"
                      : "#777777"
                  }
                />

                <Text
                  style={[
                    styles.label,
                    isActive && styles.activeLabel,
                  ]}
                >
                  {tab.name}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",

    elevation: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  tab: {
    flex: 1,

    height: 72,

    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 11,
    color: "#777777",
    marginTop: 5,
  },

  activeLabel: {
    color: "#111111",
    fontWeight: "700",
  },

  cartTabContainer: {
    justifyContent: "flex-start",
  },

  cartButton: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: "#111111",

    alignItems: "center",
    justifyContent: "center",

    marginTop: -24,

    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  cartButtonActive: {
    transform: [
      {
        scale: 1.05,
      },
    ],
  },

  cartLabel: {
    marginTop: 3,
    fontWeight: "600",
  },

  badge: {
    position: "absolute",

    top: -3,
    right: -3,

    minWidth: 21,
    height: 21,

    paddingHorizontal: 5,

    borderRadius: 11,

    backgroundColor: "#E53935",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
});

export default BottomFooter;