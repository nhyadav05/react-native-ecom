import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./AddAddressStyles";
import { Image } from "react-native";

const AddAddressScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Home");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSaveAddress = () => {
    // Save address logic here
    navigation.navigate("AddressScreen", {
      newAddress: { name, contact, address, type, pincode, city, state },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/icons/back-icon.png")}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Add Address</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contact}
          keyboardType="phone-pad"
          onChangeText={setContact}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <View style={styles.radioGroup}>
          <View style={styles.radioOption}>
            <RadioButton
              value="Home"
              status={type === "Home" ? "checked" : "unchecked"}
              onPress={() => setType("Home")}
            />
            <Text style={styles.radioLabel}>Home</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton
              value="Work"
              status={type === "Work" ? "checked" : "unchecked"}
              onPress={() => setType("Work")}
            />
            <Text style={styles.radioLabel}>Work</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton
              value="Other"
              status={type === "Other" ? "checked" : "unchecked"}
              onPress={() => setType("Other")}
            />
            <Text style={styles.radioLabel}>Other</Text>
          </View>
        </View>
        <View style={styles.gridContainer}>
          <TextInput
            style={[styles.input, styles.gridItem]}
            placeholder="Pincode"
            value={pincode}
            keyboardType="numeric"
            onChangeText={setPincode}
          />
          <TextInput
            style={[styles.input, styles.gridItem]}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={[styles.input, styles.gridItem]}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
