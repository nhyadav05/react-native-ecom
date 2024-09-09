import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface ProductCardProps {
  title: string;
  discountPrice?: string;
  originalPrice?: string;
  image: any;
  onPress: () => void;
  rating?: number;
  onAddToCart: () => void;
  liked: boolean;
  onLikeToggle: () => void;
  deliveryCharges?: string;
  deliveryIcon?: any; // Icon for delivery charges
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  discountPrice,
  originalPrice,
  image,
  onPress,
  rating = 0,
  onAddToCart,
  liked,
  onLikeToggle,
  deliveryCharges,
  deliveryIcon,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={onLikeToggle}>
          <Image
            source={require("../../assets/icons/heart.png")} // Ensure this path is correct
            style={[styles.icon, liked ? styles.likedIcon : styles.unlikedIcon]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <Image
              key={index}
              source={require("../../assets/icons/star.png")}
              style={[
                styles.star,
                { tintColor: index < rating ? "#FFD700" : "#ccc" },
              ]}
            />
          ))}
        </View>
        <View style={styles.priceContainer}>
          {discountPrice && (
            <Text style={styles.discountPrice}>{discountPrice}</Text>
          )}
          {originalPrice && (
            <Text style={styles.originalPrice}>{originalPrice}</Text>
          )}
          {discountPrice && originalPrice && (
            <Text style={styles.priceOff}>81% off</Text>
          )}
        </View>
        <View style={styles.deliveryContainer}>
          <Image
            source={deliveryIcon || require("../../assets/icons/man.png")}
            style={styles.deliveryIcon}
          />
          <Text style={styles.deliveryCharges}>
            {deliveryCharges === "Free" ? "Free Delivery" : `₹70 Delivery charges`}
          </Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
    marginHorizontal: 8,
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  likedIcon: {
    tintColor: "red",
  },
  unlikedIcon: {
    tintColor: "#ccc",
  },
  infoContainer: {
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f00",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#666",
  },
  priceOff: {
    fontSize: 12,
    color: "#f00",
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  deliveryIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  deliveryCharges: {
    fontSize: 12,
    color: "#666",
  },
  addToCartButton: {
    backgroundColor: "#00529D",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ProductCard;
