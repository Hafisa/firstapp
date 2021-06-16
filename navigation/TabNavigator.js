// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text} from "react-native";
import Home from '../screen/Home'
import Tickets from '../screen/Tickets'
import Entypo from 'react-native-vector-icons/Entypo';
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

          return <Entypo name={iconName} color={color} size={size} />;
        },
        tabBarLabel: ({ focused }) => {
          return (<Text style={{ fontSize: 8 }}>{focused ? route.name : ""}</Text>)
        }
      })}
      initialRouteName={'Tickets'}
      tabBarOptions={{
        activeTintColor: '#2e2e2e',
        inactiveTintColor: 'gray',
        showLabel: true
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

export default BottomTabNavigator;