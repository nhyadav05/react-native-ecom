import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const SideMenu = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" animated={true} backgroundColor="white" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >


        <View>
          <View style={styles.modalprofileview}>
            <View style={styles.dummyDpContainer}>
              <Text style={styles.dummyDp}>👤</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.idtxt}>Jone deo</Text>
              <Text style={styles.idtxt2}>+919876543210</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineview} />

        {/* Menu Options */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>🏠</Text>
          </View>
          <Text style={styles.hometxt}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Products');
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>🛍️</Text>
          </View>
          <Text style={styles.hometxt}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wishlist');
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>❤️</Text>
          </View>
          <Text style={styles.hometxt}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>🛒</Text>
          </View>
          <Text style={styles.hometxt}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>📦</Text>
          </View>
          <Text style={styles.hometxt}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>👤</Text>
          </View>
          <Text style={styles.hometxt}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}
          style={styles.firstcontainer}
        >
          <View style={styles.iconview}>
            <Text style={styles.icon}>🚪</Text>
          </View>
          <Text style={styles.hometxt}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.lastcontainer}>
          <View style={styles.lineview2} />
          <View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: 15 }}>
            <Text style={styles.Thimmappatxt}>Flipkart </Text>
            <Text style={styles.ecommercetxt}>ecommerce store</Text>
          </View>
          <Text style={[styles.ecommercetxt, { marginHorizontal: 15 }]}>App Version 1.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  closeButton: {
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  closeIcon: {
    fontSize: 20,
  },
  modalprofileview: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  idtxt: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  dummyDp: {
    fontSize: 24,
  },
  dummyDpContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 24,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idtxt2: {
    color: '#FFC300',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  lineview: {
    backgroundColor: '#e4e8ef',
    width: '100%',
    height: 1,
    marginTop: '5%',
  },
  firstcontainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
  },
  icon: {
    fontSize: 24,
  },
  hometxt: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 20,
  },
  lastcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 15,
  },
  Thimmappatxt: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  ecommercetxt: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  lineview2: {
    backgroundColor: '#e4e8ef',
    width: '100%',
    height: 1,
  },
});
