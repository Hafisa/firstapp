//  ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import BottomTabNavigator from "./navigation/TabNavigator";
import { COLORS, SIZES } from "./styles/Theme"
const App = () => {
  return (
    <>
      <StatusBar hidden={false}
        translucent={false}
        animated={true}
        backgroundColor={COLORS.statusbar}
        barStyle="dark-content" />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
};
export default App;