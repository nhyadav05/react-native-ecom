import { Text, StyleSheet, View, Image, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen/HomeS';
import { Cart, Category, Profile, Wishlist } from '../screen';
import SideMenu from '../screen/components/SideMenu';
import Splash from '../screen/SplashScreen/Splash';
import ProductCard from '../screen/components/ProductCard';
import DrawerNavigation from './DrawerNavigation';
import AddressScreen from '../screen/CartScreen/Address/AddressScreen';
import AddAddressScreen from '../screen/CartScreen/AddAddress/AddAddressScreen';
import SummaryScreen from '../screen/CartScreen/Summary/SummaryScreen';
import PaymentScreen from '../screen/CartScreen/Payment/PaymentScreen';

// Import your components based on your file structure


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Tab Navigation
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 70 : 65,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 7,
                    backgroundColor: 'white',
                    position: 'absolute',
                },
                headerShown: false,
                tabBarLabelStyle: {
                    marginTop: 5,
                },
                tabBarIconStyle: {
                    height: 37,
                    width: 29,
                },
                tabBarActiveTintColor: '#FFC300', // Active tab color
                tabBarInactiveTintColor: '#4d4d4d',  // Inactive tab color
                tabBarIcon: ({ focused }) => {
                    let icon;
                    let iconStyle = styles.defaultIcon;
                    switch (route.name) {
                      case 'Home':
                        icon = '🏠';
                        break;
                      case 'Category':
                        icon = '🛍️';
                        break;
                      case 'Cart':
                        icon = '🛒';
                        break;
                      case 'Wishlist':
                        icon = '❤️';
                        break;
                      case 'Profile':
                        icon = '👤';
                        break;
                    }
                    return (
                        <Image
                            style={[
                                iconStyle,
                                { tintColor: focused ? '#FFC300' : '#4d4d4d' }
                            ]}
                            resizeMode="contain"
                            src={icon}
                        />
                    );
                },
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={{
                            color: focused ? '#FFC300' : '#4d4d4d',
                            marginTop: 5,
                            fontFamily: 'Poppins-Medium',
                            fontSize: focused ? 13 : 12,
                        }}
                    >
                        {route.name}
                    </Text>
                ),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Wishlist" component={Wishlist} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

// Drawer Navigation
const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <SideMenu  {...props} />}
        >
            <Drawer.Screen name="Tabs" component={TabNavigator} />
        </Drawer.Navigator>
    );
};

// Stack Navigation
const AllNavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ header: () => null }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="AddressScreen" component={AddressScreen} />
                <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AllNavigations;

const styles = StyleSheet.create({
    defaultIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
    homeIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
    categoryIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
    cartIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
    wishlistIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
    profileIcon: {
        height: 21,
        width: 21,
        marginTop: 12,
    },
});
