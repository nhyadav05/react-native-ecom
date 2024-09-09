import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8ffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    elevation: 3,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#00529D",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#00529D",
  },
  spacer: {
    height: 16, // Adjust this value to control the space between the header and the card container
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    color: "#888",
    marginTop: 30,
  },

  // card
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: (width - 48) / 2, // Responsive width based on screen size
    marginBottom: 15,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 140,
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

export default styles;
