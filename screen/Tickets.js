import React from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import Card from '../components/Card'
import Header from '../components/Header'
import CommonStyle from '../styles/CommonStyle'
import {COLORS,SIZES} from '../styles/Theme'
const Tickets = (props) => {
  let headervalue={
title:"Tickets",
subtitle:"You have 2 active tickets. Good luck !"
  }
  return (
  <ImageBackground
  source={require('../assets/backgroundimage.jpeg')} 
  style={{ flex: 1,
    resizeMode: "cover",
    justifyContent: "center"}}
  >
<View style={CommonStyle.v_container}>
<Header {...headervalue}/>
<View style={styles.container}>
<Card/>
<Card/>
</View>
</View>
</ImageBackground>
  )
};
const styles = StyleSheet.create({
    container: {
      width:SIZES.width,
      flex: 1,
      padding: SIZES.width*0.05,
      // paddingLeft:12,
    //   paddingTop:0,
      // flexDirection: "column", // main axis
      justifyContent: "flex-start", // main axis
      alignItems: "center", // cross axis
      // backgroundColor: '#CEECF5',
    }
  });
export default Tickets;
