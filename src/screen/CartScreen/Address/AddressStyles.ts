import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Added border for the header
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor:'black'
  },
  plusIcon: { 
    width: 24, 
    height: 24, 
    fontWeight: 'bold',
    marginRight: 8, // Reduced margin to align with the text
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  addNewAddressContainer: {
    marginBottom: 20, // Increased margin bottom for the "Add New Address" section
    // paddingHorizontal: 10,
    borderBottomColor: "#ddd",
  },
  addButton: {
    flexDirection: 'row', // Align icon and text in a row
    // backgroundColor: "gray",
    padding: 12,
    borderRadius: 4,
    alignItems: 'center', // Center content vertically
  },
  addButtonText: {
    color: '#00529D',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: '#ddd',
  },
  addressContainer: {
    flexDirection: "column",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f9f9f9", 
    marginBottom: 10, 
  },
  selectedAddressContainer: {
    backgroundColor: '#e6f7ff',
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00529D",
    marginRight: 16,
  },
  selectedRadio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#00529D",
    marginRight: 16,
  },
  addressDetails: {
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 14,
    color: "#333",
  },
  list: {
    flexGrow: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Added border for the stepper container
    paddingBottom: 10,
  },
  deliverButtonContainer: {
    marginTop: 10, // Adjust margin as needed
  },
  deliverButton: {
    backgroundColor: "#00529D",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  deliverButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  stepperContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Added border for the stepper container
    paddingBottom: 10, // Added padding to separate the border from the stepper
  },
});

export default styles;
