// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
import Home from '../screen/Home'
import Tickets from '../screen/Tickets'
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS, SIZES } from '../styles/Theme'
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Tickets') {
            iconName = 'ticket';
          }
          else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }
          else if (route.name === 'Favourites') {
            iconName = 'heart-outlined';
          }
          else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <View style={styles.icon_container}>
              <View style={{
                backgroundColor: focused ? '#b3adab' : "#fff",
                padding: focused ? 5 : 0,
                marginTop: focused ? -15 : 0,
                paddingTop: 0,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
              }}>
                <View style={{
                  marginTop: focused ? -20 : 0,
                  borderWidth: focused ? 0.5 : 0,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  padding: 5,
                  alignItems: 'center',
                  borderColor: '#c0c0c0'
                }}>
                  <Entypo name={iconName} color={color} size={size} />
                </View>
              </View>
              <Text style={styles.icon_text} numberOfLines={1}>{focused ? route.name : ""}</Text>
            </View>
          );
        },
      })}
      initialRouteName={'Tickets'}
      tabBarOptions={{
        activeTintColor: COLORS.activetintcolor,
        inactiveTintColor: COLORS.inactivetintcolor,
        inactiveBackgroundColor: COLORS.inactivebgcolor,
        showLabel: false,
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Cart" component={Home} />
      <Tab.Screen name="Favourites" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon_container: {
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 8
  }
})
export default BottomTabNavigator;