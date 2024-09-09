import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import styles from './AddressStyles';
import Stepper from '../Stepper';

const AddressScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [addresses, setAddresses] = useState([
    { id: '1', name: 'John Doe', address: '123 Main St, City, Country', contact: '123-456-7890', type: 'Home', isSelected: false },
    { id: '2', name: 'Jane Smith', address: '456 Elm St, City, Country', contact: '987-654-3210', type: 'Work', isSelected: false },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Fetch updated addresses or perform any needed logic here
    });

    return unsubscribe;
  }, [navigation]);

  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id);
    setAddresses(prevAddresses =>
      prevAddresses.map(address =>
        address.id === id
          ? { ...address, isSelected: true }
          : { ...address, isSelected: false }
      )
    );
  };

  const handleAddAddress = () => {
    navigation.navigate('AddAddressScreen');  
  };

  const handleDeliver = () => {
    setCurrentStep(2);
    if (selectedAddressId) {
      navigation.navigate('PaymentScreen');
    }
  };

  const renderAddress = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[
        styles.addressContainer,
        item.isSelected && styles.selectedAddressContainer,
      ]}
      onPress={() => handleSelectAddress(item.id)}
    >
      <View style={styles.radioContainer}>
        <View style={item.isSelected ? styles.selectedRadio : styles.radio} />
        <View style={styles.addressDetails}>
          <Text style={styles.addressName}>{item.name}</Text>
          <Text style={styles.addressText}>{item.address}</Text>
          <Text style={styles.addressText}>{item.contact}</Text>
          <Text style={styles.addressText}>{item.type}</Text>
        </View>
      </View>
      {item.isSelected && (
        <View style={styles.deliverButtonContainer}>
          <TouchableOpacity style={styles.deliverButton} onPress={handleDeliver}>
            <Text style={styles.deliverButtonText}>Deliver to this Address</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Address</Text>
      </View>

      <View style={styles.stepperContainer}>
        <Stepper currentStep={currentStep} />
      </View>

      <View style={styles.addNewAddressContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
          <Image
            source={require('../../../assets/icons/plus.png')}
            style={styles.plusIcon}
          />
          <Text style={styles.addButtonText}> Add New Address</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={addresses}
        renderItem={renderAddress}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default AddressScreen;
