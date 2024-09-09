import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, SafeAreaView } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const DescriptionSection: React.FC = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current; // Animation for the first section
  const fadeAnim2 = useRef(new Animated.Value(0)).current; // Animation for the second section

  useEffect(() => {
    // Animate the first section
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Animate the second section with a slight delay
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 800,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim1, fadeAnim2]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardview}>
        {/* First Section: Image followed by Text */}
        <Animated.View style={[styles.section, { opacity: fadeAnim1 }]}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/ScreenImg/family-shopping.png')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              This is a description section that provides more details about the app or featured products.
              Explore our latest offers, enjoy great shopping benefits, and find out more about what we have to offer.
            </Text>
          </View>
        </Animated.View>

        {/* Second Section: Text followed by Image */}
        <Animated.View style={[styles.section, { opacity: fadeAnim2 }]}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              Discover amazing deals and offers tailored just for you. Our app provides an easy and convenient shopping
              experience with exclusive benefits.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/ScreenImg/family-shopping.png')} style={styles.image} />
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardview: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 5,
    width: screenWidth * 0.9,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Space between sections
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    borderRadius: 8,
    padding: 10,
    height: screenHeight * 0.2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    lineHeight: 24,
  },
});

export default DescriptionSection;
