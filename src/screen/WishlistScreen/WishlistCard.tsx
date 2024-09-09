import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./WishlistStyles"; 


interface WishlistCardProps {
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

const WishlistCard: React.FC<WishlistCardProps> = ({
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
export default WishlistCard;
