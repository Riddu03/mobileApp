import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function CategoryGrid({ title, items = [] }) {

  const { width } = useWindowDimensions();

  // 2 columns on mobile/tablet
  // 4 columns on larger screens
  const columns = width >= 768 ? 4 : 2;

  const boxWidth =
    columns === 4
      ? "23.5%"
      : "48%";

  return (
    <View style={styles.section}>

      {/* Section Title */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Grid */}
      <View style={styles.grid}>

        {items.map((item, index) => (

          <View
            key={index}
            style={[
              styles.categoryBox,
              {
                width: boxWidth,
              },
            ]}
          >

            {/* Product Image */}
            <View style={styles.imageContainer}>

              <Image
                source={item.image}
                style={styles.categoryImage}
              />

              {/* Wishlist */}
              <TouchableOpacity
                style={styles.wishlistButton}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color="#e53935"
                />
              </TouchableOpacity>

            </View>

            {/* Product Name */}
            <Text
              style={styles.subtitle}
              numberOfLines={2}
            >
              {item.name}
            </Text>

            {/* Price */}
            <View style={styles.priceRow}>

              {/* Selling Price */}
              <Text style={styles.sellingPrice}>
                ₹{item.sellingPrice || 0}
              </Text>

              {/* MRP */}
              {item.mrp && (
                <Text style={styles.mrp}>
                  ₹{item.mrp}
                </Text>
              )}

              {/* Discount */}
              {item.discount > 0 && (
                <Text style={styles.discount}>
                  {item.discount}% OFF
                </Text>
              )}

            </View>

            {/* Rating */}
            <View style={styles.ratingRow}>

              <View style={styles.stars}>

                {[1, 2, 3, 4, 5].map((star) => (

                  <Ionicons
                    key={star}
                    name={
                      star <= (item.rating || 0)
                        ? "star"
                        : "star-outline"
                    }
                    size={13}
                    color="#f5a623"
                  />

                ))}

              </View>

              <Text style={styles.reviewText}>
                ({item.reviews || 0})
              </Text>

            </View>

            {/* Colors */}
            {item.colors?.length > 0 && (

              <View style={styles.optionRow}>

                <Text style={styles.optionLabel}>
                  Color:
                </Text>

                <View style={styles.colorContainer}>

                  {item.colors.map((color, colorIndex) => (

                    <View
                      key={colorIndex}
                      style={[
                        styles.colorCircle,
                        {
                          backgroundColor: color,
                        },
                      ]}
                    />

                  ))}

                </View>

              </View>

            )}

            {/* Sizes */}
            {item.sizes?.length > 0 && (

              <View style={styles.optionRow}>

                <Text style={styles.optionLabel}>
                  Size:
                </Text>

                <View style={styles.sizeContainer}>

                  {item.sizes.map((size, sizeIndex) => (

                    <View
                      key={sizeIndex}
                      style={styles.sizeBox}
                    >
                      <Text style={styles.sizeText}>
                        {size}
                      </Text>
                    </View>

                  ))}

                </View>

              </View>

            )}

            {/* Add To Cart */}
            <TouchableOpacity
              style={styles.cartButton}
              activeOpacity={0.8}
            >

              <Ionicons
                name="cart-outline"
                size={17}
                color="#fff"
              />

              <Text style={styles.cartButtonText}>
                Add to Cart
              </Text>

            </TouchableOpacity>

          </View>

        ))}

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  section: {
    marginTop: 5,
    paddingHorizontal: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  /* Image */

  imageContainer: {
    position: "relative",
  },

  categoryImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
  },

  /* Wishlist */

  wishlistButton: {
    position: "absolute",
    right: 6,
    top: 6,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  /* Product Name */

  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 7,
    lineHeight: 17,
    minHeight: 34,
  },

  /* Price */

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 5,
  },

  sellingPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
  },

  mrp: {
    fontSize: 11,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },

  discount: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#168a3b",
    marginLeft: 6,
  },

  /* Rating */

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  stars: {
    flexDirection: "row",
  },

  reviewText: {
    fontSize: 11,
    color: "#777",
    marginLeft: 4,
  },

  /* Options */

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    flexWrap: "wrap",
  },

  optionLabel: {
    fontSize: 11,
    color: "#555",
    marginRight: 5,
  },

  /* Colors */

  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  colorCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    marginRight: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  /* Sizes */

  sizeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },

  sizeBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 3,
    marginBottom: 2,
  },

  sizeText: {
    fontSize: 9,
    color: "#444",
  },

  /* Cart */

  cartButton: {
    marginTop: 9,
    backgroundColor: "#111",
    borderRadius: 6,
    minHeight: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cartButtonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 5,
  },

});