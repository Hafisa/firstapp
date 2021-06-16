import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Card from '../components/Card'
import Header from '../components/Header'
import CommonStyle from '../styles/CommonStyle'
import { COLORS, SIZES } from '../styles/Theme'
const Home = (props) => {
  let headervalue = {
    title: props.route.name,
    subtitle: "- - - - - - -"
  }
  return (
    <View style={CommonStyle.v_container}>
      <Header {...headervalue} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome ! ! !</Text>
      </View>
    </View>
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
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.title,
  }
});
export default Home;
