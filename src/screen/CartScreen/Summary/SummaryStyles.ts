// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 8,
//   },
//   summaryContainer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     marginTop: 16,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   finishButton: {
//     backgroundColor: '#00529D',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   finishButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 12,
//     tintColor:'black'
//   },
//   stepperContainer: {
//     paddingVertical: 12,
//     backgroundColor: '#f1f1f1',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
// });

// export default styles;



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  summaryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  deliveryContainer: {
    marginBottom: 16,
  },
  estimatedDeliveryText: {
    fontSize: 16,
    color: '#00529D',
    fontWeight: 'bold',
  },
  deliveryDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  stepperContainer: {
    marginVertical: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepTextContainer: {
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
  downloadInvoiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00529D',
    backgroundColor: '#f1f1f1',
  },
  downloadInvoiceText: {
    fontSize: 16,
    color: '#00529D',
    marginLeft: 8,
  },
  finishButton: {
    backgroundColor: '#00529D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backIcon: {
    marginRight: 8,
  },
});

export default styles;
