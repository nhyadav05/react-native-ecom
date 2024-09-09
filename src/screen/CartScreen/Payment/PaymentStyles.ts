// import { StyleSheet } from 'react-native';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd', // Added border for the header
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 12,
//     tintColor:'black'
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 8,
//   },
//   stepperItem: {
//     alignItems: 'center',
//   },
//   stepperText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   stepperCircleFilled: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: '#6200ee',
//     marginTop: 4,
//   },
//   stepperCircle: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: '#ccc',
//     marginTop: 4,
//   },
//   stepperLine: {
//     width: 30,
//     height: 2,
//     backgroundColor: '#ccc',
//   },
//   paymentContainer: {
//     paddingHorizontal: 16,
//   },
//   paymentTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 16,
//   },
//   paymentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   selectedPaymentOption: {
//     borderColor: '#6200ee',
//     borderWidth: 2,
//     borderRadius: 8,
//   },
//   paymentInfo: {
//     flex: 1,
//   },
//   paymentAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   paymentMethod: {
//     fontSize: 14,
//     color: '#000',
//   },
//   paymentIcon: {
//     width: 30,
//     height: 30,
//     marginHorizontal: 8,
//   },
//   discountRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   originalAmount: {
//     textDecorationLine: 'line-through',
//     color: '#888',
//     fontSize: 12,
//     marginRight: 4,
//   },
//   discountedAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   savings: {
//     color: 'green',
//     fontSize: 12,
//     marginLeft: 8,
//   },
//   bankOffer: {
//     fontSize: 12,
//     color: 'green',
//     marginTop: 4,
//   },
//   lastUsedTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   paymentDetails: {
//     fontSize: 12,
//     color: '#888',
//   },
//   upiOffers: {
//     fontSize: 12,
//     color: 'green',
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     backgroundColor: '#f8f8f8',
//   },
//   totalAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   continueButton: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   checkboxIcon: {
//     width: 24,
//     height: 24,
//     marginLeft: 10,
//   },
//   stepperContainer: {
//     marginVertical: 16,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd', // Added border for the stepper container
//     paddingBottom: 10, // Added padding to separate the border from the stepper
//   },
// });







import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor:'black'
  },
  stepperContainer: {
    paddingVertical: 12,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  paymentContainer: {
    paddingHorizontal: 16,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentMethod: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10, // Adjusted to add space between the image and text
  },
  paymentIcon: {
    width: 30,
    height: 30,
  },
  selectedPaymentOption: {
    borderColor: '#6200ee',
    borderWidth: 2,
    borderRadius: 8,
  },
  lastUsedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paymentDetails: {
    fontSize: 12,
    color: '#888',
  },
  upiOffers: {
    fontSize: 12,
    color: 'green',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f8f8f8',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor:  "#00529D",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    bankOffer: {
    fontSize: 12,
    color: 'green',
    marginTop: 4,
  },
  radioButton: {
    width: 24,
    height: 24,
    marginLeft: 16, // Space between the image and radio button
  },
});
