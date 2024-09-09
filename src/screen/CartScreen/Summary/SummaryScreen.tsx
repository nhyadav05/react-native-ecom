// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Image,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Stepper from "../Stepper";

// const SummaryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
//   const handleFinish = () => {
//     navigation.navigate("HomeScreen"); // Example navigation
//   };

//   const downloadInvoice = () => {
//     // Logic for downloading invoice
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={require("../../../assets/icons/back-icon.png")}
//             style={styles.backIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Summary</Text>
//       </View>
//       {/* Stepper */}
//       <View style={styles.stepperContainer}>
//         <Stepper currentStep={3} />
//       </View>

//       <ScrollView style={styles.contentContainer}>
//         {/* Delivery Date */}
//         <View style={styles.deliveryContainer}>
//           <Text style={styles.estimatedDeliveryText}>
//             Estimated Delivery Date
//           </Text>
//           <Text style={styles.deliveryDate}>August 28, 2024</Text>
//         </View>

//         {/* Vertical Stepper */}
//         <View style={styles.stepperContainer}>
//           <View style={styles.step}>
//             <Ionicons name="checkmark-circle" size={24} color="#00529D" />
//             <View style={styles.stepTextContainer}>
//               <Text style={styles.stepTitle}>Order Placed</Text>
//               <Text style={styles.stepDate}>August 22, 2024</Text>
//             </View>
//           </View>
//           <View style={styles.step}>
//             <Ionicons name="checkmark-circle" size={24} color="#00529D" />
//             <View style={styles.stepTextContainer}>
//               <Text style={styles.stepTitle}>Shipped</Text>
//               <Text style={styles.stepDate}>August 23, 2024</Text>
//             </View>
//           </View>
//           <View style={styles.step}>
//             <Ionicons
//               name="checkmark-circle-outline"
//               size={24}
//               color="#00529D"
//             />
//             <View style={styles.stepTextContainer}>
//               <Text style={styles.stepTitle}>Out for Delivery</Text>
//               <Text style={styles.stepDate}>August 28, 2024</Text>
//             </View>
//           </View>
//           <View style={styles.step}>
//             <Ionicons name="ellipse-outline" size={24} color="#00529D" />
//             <View style={styles.stepTextContainer}>
//               <Text style={styles.stepTitle}>Delivered</Text>
//               <Text style={styles.stepDate}>Expected August 28, 2024</Text>
//             </View>
//           </View>
//         </View>

//         {/* Download Invoice */}
//         <TouchableOpacity
//           style={styles.downloadInvoiceButton}
//           onPress={downloadInvoice}
//         >
//           <Image
//             source={require("../../../assets/icons/invoice.png")}
//             style={styles.invoiceIcon}
//           />
//           <Text style={styles.downloadInvoiceText}>Download Invoice</Text>
//         </TouchableOpacity>

//         {/* Finish Button */}
//         <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
//           <Text style={styles.finishButtonText}>Finish</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#f8f8f8",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 12,
//     tintColor: "black",
//   },
//   invoiceIcon: { width: 24, height: 24, marginRight: 12 },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 8,
//   },
//   contentContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 24,
//   },
//   deliveryContainer: {
//     marginBottom: 24,
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   estimatedDeliveryText: {
//     fontSize: 16,
//     color: "#00529D",
//     fontWeight: "bold",
//   },
//   deliveryDate: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginTop: 8,
//   },
//   stepperContainer: {
//     marginVertical: 24,
//   },
//   step: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   stepTextContainer: {
//     marginLeft: 12,
//   },
//   stepTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   stepDate: {
//     fontSize: 14,
//     color: "#666",
//   },
//   downloadInvoiceButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 24,
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#00529D",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   downloadInvoiceText: {
//     fontSize: 16,
//     color: "#00529D",
//     marginLeft: 8,
//   },
//   finishButton: {
//     backgroundColor: "#00529D",
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 24,
//   },
//   finishButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default SummaryScreen;



import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderStatusTracker from './OrderStatusTracker';

const SummaryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const products = [
    {
      id: '1',
      name: 'Sample Product 1',
      price: '₹1,299',
      description: 'A brief description of the product goes here, highlighting key features and benefits.',
      image: require('../../../assets/product/strawberry-rabbit.webp'),
    },
    
  ];

  const handleFinish = () => {
    navigation.navigate('HomeScreen'); // Example navigation
  };

  const downloadInvoice = () => {
    // Logic for downloading invoice
  };

  const renderProductItem = ({ item }: { item: any }) => (
    <View style={styles.productItem}>
      <Image
        source={item.image}
        style={styles.productImage}
      />
      <View style={styles.productTextContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Summary</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        {/* Delivery Date */}
        <View style={styles.deliveryContainer}>
          <Text style={styles.estimatedDeliveryText}>Estimated Delivery Date</Text>
          <Text style={styles.deliveryDate}>August 28, 2024</Text>
        </View>

        {/* Vertical Stepper */}
        {/* <View style={styles.stepperContainer}>
          <View style={styles.step}>
            <View style={styles.stepCircleCompleted}>
              <Ionicons name="checkmark" size={16} color="#fff" />
            </View>
            <View style={styles.stepDetails}>
              <Text style={styles.stepTitle}>Order Placed</Text>
              <Text style={styles.stepDate}>August 22, 2024</Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.stepCircleCompleted}>
              <Ionicons name="checkmark" size={16} color="#fff" />
            </View>
            <View style={styles.stepDetails}>
              <Text style={styles.stepTitle}>Shipped</Text>
              <Text style={styles.stepDate}>August 23, 2024</Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.stepCircle}>
              <Ionicons name="ellipse-outline" size={16} color="#00529D" />
            </View>
            <View style={styles.stepDetails}>
              <Text style={styles.stepTitle}>Out for Delivery</Text>
              <Text style={styles.stepDate}>August 28, 2024</Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.stepCircle}>
              <Ionicons name="ellipse-outline" size={16} color="#00529D" />
            </View>
            <View style={styles.stepDetails}>
              <Text style={styles.stepTitle}>Delivered</Text>
              <Text style={styles.stepDate}>Expected August 28, 2024</Text>
            </View>
          </View>
        </View> */}
        <OrderStatusTracker/>

        {/* Product Details */}
        <View style={styles.productContainer}>
          <Text style={styles.productTitle}>Product Details</Text>
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Download Invoice */}
        <TouchableOpacity
          style={styles.downloadInvoiceButton}
          onPress={downloadInvoice}
        >
          <Image
            source={require('../../../assets/icons/invoice.png')}
            style={styles.invoiceIcon}
          />
          <Text style={styles.downloadInvoiceText}>Download Invoice</Text>
        </TouchableOpacity>

        {/* Finish Button */}
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#00529D',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#00529D',
  },
  invoiceIcon: { width: 24, height: 24, marginRight: 12 },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  deliveryContainer: {
    marginBottom: 24,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  estimatedDeliveryText: {
    fontSize: 16,
    color: '#00529D',
    fontWeight: 'bold',
  },
  deliveryDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  stepperContainer: {
    marginVertical: 24,
    borderLeftWidth: 2,
    borderLeftColor: '#00529D',
    paddingLeft: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepCircleCompleted: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00529D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00529D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepDetails: {
    marginLeft: 12,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  stepDate: {
    fontSize: 14,
    color: '#666',
  },
  productContainer: {
    marginTop: 24,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  productTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#00529D',
    marginTop: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  downloadInvoiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00529D',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  downloadInvoiceText: {
    fontSize: 16,
    color: '#00529D',
    marginLeft: 8,
  },
  finishButton: {
    backgroundColor: '#00529D',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SummaryScreen;

