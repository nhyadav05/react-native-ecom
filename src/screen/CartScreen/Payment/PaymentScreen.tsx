// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './PaymentStyles'; // Assuming you have defined the styles in a separate file
// import Stepper from '../Stepper';

// const PaymentScreen = ({ navigation }: any) => {
//   const [currentStep, setCurrentStep] = useState(2);


//   const handleContinue = () => {
//     setCurrentStep(3)
//     navigation.navigate('SummaryScreen');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={require('../../../assets/icons/back-icon.png')}
//             style={styles.backIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Payment Method</Text>
//       </View>

//       {/* Stepper */}
//       <View style={styles.stepperContainer}>
//         <Stepper currentStep={currentStep} />
//       </View>

//       {/* Payment Options */}
//       <ScrollView style={styles.paymentContainer}>
//         <Text style={styles.paymentTitle}>Select Payment Method</Text>

//         {/* Cash on Delivery */}
//         <TouchableOpacity style={styles.paymentOption}>
//           <View style={styles.paymentInfo}>
//             <Text style={styles.paymentMethod}>Cash on Delivery</Text>
//           </View>
//           <Image
//             source={require('../../../assets/icons/cash-on-delivery.png')}
//             style={styles.paymentIcon}
//           />
//         </TouchableOpacity>

//         {/* Pay Online */}
//         <TouchableOpacity style={[styles.paymentOption, styles.selectedPaymentOption]}>
//           <View style={styles.paymentInfo}>
//             <Text style={styles.paymentMethod}>Pay Online</Text>
//             <Text style={styles.bankOffer}>Extra discount with bank offers</Text>
//           </View>
//           <Image
//             source={require('../../../assets/icons/mastercard1.png')}
//             style={styles.paymentIcon}
//           />
//         </TouchableOpacity>

//         {/* Last Used */}
//         <Text style={styles.lastUsedTitle}>Last Used</Text>

//         {/* Example Payment Methods */}
//         <TouchableOpacity style={styles.paymentOption}>
//           <View style={styles.paymentInfo}>
//             <Text style={styles.paymentMethod}>PhonePe</Text>
//             <Text style={styles.paymentDetails}>8964850575@ybl</Text>
//           </View>
//           <Image
//             source={require('../../../assets/icons/phonepe.png')}
//             style={styles.paymentIcon}
//           />
    
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.paymentOption}>
//           <View style={styles.paymentInfo}>
//             <Text style={styles.paymentMethod}>GPay</Text>
//           </View>
//           <Image
//             source={require('../../../assets/icons/googlePay.jpeg')}
//             style={styles.paymentIcon}
//           />
//         </TouchableOpacity>

//         {/* UPI */}
//         <TouchableOpacity style={styles.paymentOption}>
//           <View style={styles.paymentInfo}>
//             <Text style={styles.paymentMethod}>UPI</Text>
//             <Text style={styles.upiOffers}>Offers Available</Text>
//           </View>
//           <Image
//             source={require('../../../assets/icons/rupay1.png')}
//             style={styles.paymentIcon}
//           />
          
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Continue Button */}
//       <View style={styles.bottomContainer}>
//         <Text style={styles.totalAmount}>₹303</Text>
//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.continueButtonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PaymentScreen;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from './PaymentStyles'; // Assuming you have defined the styles in a separate file
import Stepper from '../Stepper';

const PaymentScreen = ({ navigation }: any) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method);
  };

  const handleContinue = () => {
    navigation.navigate('SummaryScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/back-icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
      </View>

      {/* Stepper */}
      <View style={styles.stepperContainer}>
        <Stepper currentStep={2} />
      </View>

      {/* Payment Options */}
      <ScrollView style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Select Payment Method</Text>

        {/* Cash on Delivery */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'cash' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentSelect('cash')}
        >
          <View style={styles.paymentInfo}>
            <Image
              source={require('../../../assets/icons/cash-on-delivery.png')}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentMethod}>Cash on Delivery</Text>
          </View>
          {selectedPayment === 'cash' && (
            <Image
              source={require('../../../assets/icons/checked.png')} // Your checked image
              style={styles.radioButton}
            />
          )}
        </TouchableOpacity>

        {/* Pay Online */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'online' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentSelect('online')}
        >
          <View style={styles.paymentInfo}>
            <Image
              source={require('../../../assets/icons/mastercard1.png')}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentMethod}>Pay Online</Text>
            <Text style={styles.bankOffer}>Extra discount with bank offers</Text>
          </View>
          {selectedPayment === 'online' && (
            <Image
              source={require('../../../assets/icons/checked.png')} // Your checked image
              style={styles.radioButton}
            />
          )}
        </TouchableOpacity>

        {/* Last Used */}
        <Text style={styles.lastUsedTitle}>Last Used</Text>

        {/* Example Payment Methods */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'phonepe' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentSelect('phonepe')}
        >
          <View style={styles.paymentInfo}>
            <Image
              source={require('../../../assets/icons/phonepe.png')}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentMethod}>PhonePe</Text>
            <Text style={styles.paymentDetails}>8964850575@ybl</Text>
          </View>
          {selectedPayment === 'phonepe' && (
            <Image
              source={require('../../../assets/icons/checked.png')} // Your checked image
              style={styles.radioButton}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'gpay' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentSelect('gpay')}
        >
          <View style={styles.paymentInfo}>
            <Image
              source={require('../../../assets/icons/googlePay.jpeg')}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentMethod}>GPay</Text>
          </View>
          {selectedPayment === 'gpay' && (
            <Image
              source={require('../../../assets/icons/checked.png')} // Your checked image
              style={styles.radioButton}
            />
          )}
        </TouchableOpacity>

        {/* UPI */}
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'upi' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentSelect('upi')}
        >
          <View style={styles.paymentInfo}>
            <Image
              source={require('../../../assets/icons/phonepe.png')}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentMethod}>UPI</Text>
            <Text style={styles.upiOffers}>Offers Available</Text>
          </View>
          {selectedPayment === 'upi' && (
            <Image
              source={require('../../../assets/icons/checked.png')} // Your checked image
              style={styles.radioButton}
            />
          )}
        </TouchableOpacity>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmount}>₹303</Text>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
