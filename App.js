//  ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {StatusBar,View,Text} from 'react-native';
import BottomTabNavigator from "./navigation/TabNavigator";

const App = () => {
  return (
    <>
     <StatusBar  hidden={false} 
     translucent={false}
     animated={true}
     backgroundColor="#fff"
      barStyle="dark-content"  />
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    </>
  );
};
export default App;