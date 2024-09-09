// // src/screens/Profile.tsx
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// const Profile: React.FC = () => {
//   const [isEditing, setIsEditing] = useState<boolean>(false);
//   const [username, setUsername] = useState<string>('John Doe');
//   const [email, setEmail] = useState<string>('john.doe@example.com');
  
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = () => {
//     // Implement save functionality
//     setIsEditing(false);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.profileHeader}>
//         <Image
//           source={require('../../assets/profile.jpeg')} // Replace with actual profile image
//           style={styles.profileImage}
//         />
//         <TouchableOpacity onPress={handleEditToggle} style={styles.editButton}>
//           <Text style={styles.editButtonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Username:</Text>
//         {isEditing ? (
//           <TextInput
//             style={styles.input}
//             value={username}
//             onChangeText={setUsername}
//           />
//         ) : (
//           <Text style={styles.text}>{username}</Text>
//         )}
//         <Text style={styles.label}>Email:</Text>
//         {isEditing ? (
//           <TextInput
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//           />
//         ) : (
//           <Text style={styles.text}>{email}</Text>
//         )}
//         {isEditing && (
//           <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
//             <Text style={styles.saveButtonText}>Save</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 16,
//   },
//   editButton: {
//     backgroundColor: '#00529D',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//   },
//   editButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   saveButton: {
//     backgroundColor: '#00529D',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Profile;



// src/screens/Profile.tsx
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const Profile: React.FC = ({navigation}:any) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('John Doe');
  const [phoneNumber, setPhoneNumber] = useState<string>('123-456-7890');
  const [email, setEmail] = useState<string>('john.doe@example.com');
  const [gender, setGender] = useState<string>('Male');
  const [pinCode, setPinCode] = useState<string>('123456');
  const [city, setCity] = useState<string>('New York');
  const [state, setState] = useState<string>('NY');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Implement save functionality
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/back-icon.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile 👤</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/profile.jpeg')} 
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={handleEditToggle} style={styles.editButton}>
            <Text style={styles.editButtonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          ) : (
            <Text style={styles.text}>{fullName}</Text>
          )}
          <Text style={styles.label}>Phone Number:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.text}>{phoneNumber}</Text>
          )}
          <Text style={styles.label}>Email:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.text}>{email}</Text>
          )}
          <Text style={styles.label}>Gender:</Text>
          {isEditing ? (
            <Picker
              selectedValue={gender}
              style={styles.picker}
              onValueChange={(itemValue: any) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          ) : (
            <Text style={styles.text}>{gender}</Text>
          )}
          <Text style={styles.label}>Pin Code:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="numeric"
            />
          ) : (
            <Text style={styles.text}>{pinCode}</Text>
          )}
          <Text style={styles.label}>City:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
            />
          ) : (
            <Text style={styles.text}>{city}</Text>
          )}
          <Text style={styles.label}>State:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={state}
              onChangeText={setState}
            />
          ) : (
            <Text style={styles.text}>{state}</Text>
          )}
          {isEditing && (
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8ffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    elevation: 3,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#00529D",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#00529D",
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80, // Ensure content is visible above the tab bar
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
    borderRadius: 15,
    borderColor:'red',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderColor:'red',
  },
  editButton: {
    backgroundColor: '#00529D',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 16,
    height: 40,
  },
  saveButton: {
    backgroundColor: '#00529D',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:16,
    marginBottom:16
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
