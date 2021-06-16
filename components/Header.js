import React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
import {COLORS,SIZES} from '../styles/Theme'
const Header = (props) => {

const {title,subtitle}=props
  return (
<View style={styles.container}>
  <Text style={styles.title}>{title}</Text>
  <Text style={styles.subtitle}>{subtitle}</Text>
</View>
  )
};
const styles = StyleSheet.create({
    container: {
        width:SIZES.width,
      // flex: 1,
      padding: 8,
      paddingLeft:12,
    //   paddingTop:0,
      // flexDirection: "column", // main axis
      justifyContent: "flex-start", // main axis
      // alignItems: "center", // cross axis
      backgroundColor: '#fff',
    },
    title:{
fontSize:18,
fontWeight:'bold',
color:COLORS.title,
paddingLeft:5
    },
    subtitle:{
        fontSize:14,
        fontWeight:'700',
        color:'#d1d1d1',
        paddingLeft:5
    }

  });
export default Header;
