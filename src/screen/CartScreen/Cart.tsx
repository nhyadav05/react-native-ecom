import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import styles from './CartStyles';
import Stepper from './Stepper';

interface CartItem {
  id: string;
  image: any;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  size: string;
  quantity: number;
}

const CART_ITEMS: CartItem[] = [
  { id: '1', image: require('../../assets/product/balck-sandal.webp'), title: 'Black Sandal', price: '₹800', originalPrice: '₹1000', discount: '20%', size: 'Free Size', quantity: 1 },
  { id: '2', image: require('../../assets/product/strawberry-rabbit.webp'), title: 'Strawberry Rabbit', price: '₹1200', originalPrice: '₹1500', discount: '20%', size: 'Medium', quantity: 2 },
  // Add more items as needed
];



const Cart: React.FC = ({ navigation }:any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    if (currentStep === 0) {
      navigation.navigate('AddressScreen');
    } else if (currentStep === 1) {
      navigation.navigate('PaymentScreen');
    } else if (currentStep === 2) {
      navigation.navigate('SummaryScreen');
    }
    setCurrentStep((prevStep) => (prevStep + 1) % 4);
  };


  const handleQuantityChange = (id: string, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.originalPrice.replace('₹', '').replace(',', '')) * item.quantity, 0) - calculateTotal();
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
          <Text style={styles.discount}>{item.discount} Off</Text>
        </View>
        <Text style={styles.size}>Size: {item.size}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleQuantityChange(item.id, -1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleQuantityChange(item.id, 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/back-icon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>
      {/* Progress Steps */}
      <View style={styles.stepperContainer}>
        <Stepper currentStep={currentStep} />
      </View>
      {/* Cart Items */}
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        // contentContainerStyle={styles.list}
      />
      {/* Price Details */}
      <View style={styles.priceDetailsContainer}>
        <Text style={styles.priceDetailsTitle}>Price Details ({cartItems.length} Items)</Text>
        <View style={styles.priceRow}>
          <Text>Total Product Price</Text>
          <Text>₹{calculateTotal().toFixed(2)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Total Discounts</Text>
          <Text>- ₹{calculateDiscount().toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Order Total</Text>
          <Text>₹{calculateTotal().toFixed(2)}</Text>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>₹{calculateTotal().toFixed(2)}</Text>
        <TouchableOpacity
  style={styles.checkoutButton}
  onPress={() => {
    console.log('Continue button pressed');
    if (currentStep === 0) {
      navigation.navigate('AddressScreen');
    } else if (currentStep === 1) {
      navigation.navigate('PaymentScreen');
    } else if (currentStep === 2) {
      navigation.navigate('SummaryScreen');
    }
    setCurrentStep((prevStep) => (prevStep + 1) % 4);
  }}
>
  <Text style={styles.checkoutButtonText}>Continue</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
  
};

export default Cart;
