import React from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, } from 'react-native';
import Header from '../components/Header'
import CommonStyle from '../styles/CommonStyle'
import { COLORS, SIZES } from '../styles/Theme'
const Home = (props) => {
  let headervalue = {
    title: props.route.name,
    subtitle: "! ! ! ! !"
  }
  return (
    <ImageBackground
      source={require('../assets/backgroundimage.jpeg')}
      style={styles.background_image}>
      <View style={CommonStyle.v_container}>
        <Header {...headervalue} />
        <View style={styles.container}>
          <Text style={styles.text}>Welcome ! ! !</Text>
        </View>
      </View>
    </ImageBackground>
  )
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    flex: 1,
    padding: 8,
    paddingLeft: 12,
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.title,
  },
  background_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default Home;
