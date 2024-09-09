import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import DescriptionSection from "../components/DescriptionSection";

const { width: WIDTH } = Dimensions.get("window");

const CATEGORIES = [
  { id: "1", name: "Footwear", image: require("../../assets/product/balck-sandal.webp") },
  { id: "2", name: "Jewellry", image: require("../../assets/product/ring2.webp") },
  { id: "3", name: "Clothing", image: require("../../assets/product/tshirt1.webp") },
  { id: "4", name: "Soft Toy", image: require("../../assets/product/buddhamonk.webp") },
  { id: "5", name: "Mobiles", image: require("../../assets/mobile/mobile2.jpeg") },
  { id: "6", name: "curtain", image: require("../../assets/product/window-curtain.webp") },
];

const PRODUCTS = [
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
  { 
    id: "7", 
    title: "iPhone 1", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/iphone1.jpeg"), 
    liked: true 
  },
  { 
    id: "8", 
    title: "Sandal", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/sandal.webp"), 
    liked: false 
  },
  { 
    id: "9", 
    title: "Curtain", 
    discountPrice: "₹18", 
    originalPrice: "₹20", 
    image: require("../../assets/product/door-curtain.webp"), 
    liked: false 
  },
  { 
    id: "10", 
    title: "Women Braclet", 
    discountPrice: "₹180", 
    originalPrice: "₹200", 
    image: require("../../assets/product/braclet.webp"), 
    liked: false 
  },
];

const slideimage = [
  { id: 1, image: require("../../assets/banner/banner6.jpg") },
  { id: 2, image: require("../../assets/banner/banner2.png") },
  { id: 3, image: require("../../assets/banner/banner7.jpg") },
  { id: 4, image: require("../../assets/banner/banner4.jpg") },
  { id: 5, image: require("../../assets/banner/banner5.jpg") },
];

const HomeScreen: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const handleLikeToggle = (productId: string) => {
    setLikedProducts(prevState =>
      prevState.includes(productId)
        ? prevState.filter(id => id !== productId)
        : [...prevState, productId]
    );
  };

  const renderCategory = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <CategoryCard
      name={item.name}
      image={item.image}
      onPress={() => console.log(`Pressed ${item.name}`)}
    />
  );

  const renderProduct = ({ item }: { item: { id: string; title: string; discountPrice: string; originalPrice: string; image: any } }) => (
    <ProductCard
      title={item.title}
      discountPrice={item.discountPrice}
      originalPrice={item.originalPrice}
      image={item.image}
      onPress={() => console.log(`Pressed ${item.title}`)}
      rating={4}
      liked={likedProducts.includes(item.id)}
      onLikeToggle={() => handleLikeToggle(item.id)}
      onAddToCart={() => console.log(`Added ${item.title} to cart`)}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header - First Container */}
      <Header />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Carousel - Second Container */}
        <View style={styles.SecondContainerview}>
          <FlatList
            horizontal
            data={slideimage}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <ImageBackground source={item.image} style={styles.slideImage} />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Categories - Third Container */}
        <View style={styles.categories}>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {/* Products - Fourth Container */}
        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productList}
        />
        <DescriptionSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 70, // Ensures space for bottom tabs
  },
  row: {
    justifyContent: 'space-between',
  },
  SecondContainerview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  slide: {
    width: WIDTH,
    height: '100%',
  },
  slideImage: {
    width: "100%",
    height: "100%",
  },
  categories: {
    marginVertical: 16,
  },
  categoryList: {
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
