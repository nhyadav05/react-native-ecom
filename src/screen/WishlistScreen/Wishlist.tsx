import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import styles from "./WishlistStyles"; 
import WishlistCard from "./WishlistCard";

const WISHLIST = [
  { 
    id: "1", 
    title: "Black Sandal", 
    discountPrice: "₹8", 
    originalPrice: "₹10", 
    image: require("../../assets/product/balck-sandal.webp"), 
    liked: true 
  },
  { 
    id: "2", 
    title: "Strawberry Rabbit", 
    discountPrice: "₹12", 
    originalPrice: "₹15", 
    image: require("../../assets/product/strawberry-rabbit.webp"), 
    liked: false 
  },
  { 
    id: "3", 
    title: "T-Shirt 1", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/tshirt1.webp"), 
    liked: true 
  },
  { 
    id: "4", 
    title: "Buddha Monk", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/buddhamonk.webp"), 
    liked: false 
  },
  { 
    id: "5", 
    title: "iPhone 4", 
    discountPrice: "₹180", 
    originalPrice: "₹200", 
    image: require("../../assets/product/iphone4.jpeg"), 
    liked: true 
  },
  { 
    id: "6", 
    title: "Giva", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/giva.webp"), 
    liked: false 
  },
];

const WishlistScreen: React.FC = ({ navigation }: any) => {
  const [likedProducts, setLikedProducts] = useState<string[]>(["1", "3", "5", "6"]);

  const handleLikeToggle = (productId: string) => {
    setLikedProducts(prevState =>
      prevState.includes(productId)
        ? prevState.filter(id => id !== productId)
        : [...prevState, productId]
    );
  };

  const renderProduct = ({ item }: { item: any }) => (
    <WishlistCard
      title={item.title}
      discountPrice={item.discountPrice}
      originalPrice={item.originalPrice}
      image={item.image}
      liked={likedProducts.includes(item.id)}
      onLikeToggle={() => handleLikeToggle(item.id)}
      onAddToCart={() => console.log(`Added ${item.title} to cart`)}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/back-icon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist ❤️</Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Card Container */}
      <FlatList
        data={WISHLIST.filter(product => likedProducts.includes(product.id))}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>Your Wishlist is empty!</Text>}
      />
    </View>
  );
};

export default WishlistScreen;
