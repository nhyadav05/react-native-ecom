import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OrderStatusTracker: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        {/* Order Placed */}
        <View style={styles.step}>
          <View style={currentStep >= 0 ? styles.stepCircleCompleted : styles.stepCircle}>
            <Image
              source={currentStep >= 0 ? require('../../../assets/icons/checked.png') : require('../../../assets/icons/no.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.stepDetails}>
            <Text style={styles.stepTitle}>Order Placed</Text>
            <Text style={styles.stepDate}>August 22, 2024</Text>
          </View>
        </View>
        <View style={currentStep > 0 ? styles.lineCompleted : styles.line} />

        {/* Shipped */}
        <View style={styles.step}>
          <View style={currentStep >= 1 ? styles.stepCircleCompleted : styles.stepCircle}>
            <Image
              source={currentStep >= 1 ? require('../../../assets/icons/checked.png') : require('../../../assets/icons/no.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.stepDetails}>
            <Text style={styles.stepTitle}>Shipped</Text>
            <Text style={styles.stepDate}>August 23, 2024</Text>
          </View>
        </View>
        <View style={currentStep > 1 ? styles.lineCompleted : styles.line} />

        {/* Out for Delivery */}
        <View style={styles.step}>
          <View style={currentStep >= 2 ? styles.stepCircleCompleted : styles.stepCircle}>
            <Image
              source={currentStep >= 2 ? require('../../../assets/icons/checked.png') : require('../../../assets/icons/no.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.stepDetails}>
            <Text style={styles.stepTitle}>Out for Delivery</Text>
            <Text style={styles.stepDate}>August 28, 2024</Text>
          </View>
        </View>
        <View style={currentStep > 2 ? styles.lineCompleted : styles.line} />

        {/* Delivered */}
        <View style={styles.step}>
          <View style={currentStep >= 3 ? styles.stepCircleCompleted : styles.stepCircle}>
            <Image
              source={currentStep >= 3 ? require('../../../assets/icons/checked.png') : require('../../../assets/icons/checked.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.stepDetails}>
            <Text style={styles.stepTitle}>Delivered</Text>
            <Text style={styles.stepDate}>Expected August 28, 2024</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  stepperContainer: {
    flexDirection: 'column',
    marginVertical: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#00529D',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  stepCircleCompleted: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00529D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepDetails: {
    marginLeft: 12,
    flex: 1,
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
  line: {
    height: 20,
    width: 2,
    backgroundColor: '#aaaaaa',
    alignSelf: 'center',
  },
  lineCompleted: {
    height: 20,
    width: 2,
    backgroundColor: '#00529D',
    alignSelf: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export default OrderStatusTracker;
