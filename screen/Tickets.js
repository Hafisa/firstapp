import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import CommonStyle from '../styles/CommonStyle'
import { COLORS, SIZES } from '../styles/Theme'
import TicketList from '../components/TicketList';
const Tickets = (props) => {
  let headervalue = {
    title: "Tickets",
    subtitle: "You have 2 active tickets. Good luck !"
  }
  return (
    <ImageBackground
      source={require('../assets/backgroundimage.jpeg')}
      style={styles.background_image}
    >
      <View style={CommonStyle.v_container}>
        <Header {...headervalue} />
        <View style={styles.container}>
          <TicketList />
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    flex: 1,
    padding: SIZES.width * 0.05,
    justifyContent: "flex-start", // main axis
    alignItems: "center", // cross axis
  },
  background_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button_container: {
    alignItems: 'center', paddingBottom: 5
  },
  button_text: {
    color: '#fff', fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#1e90ff',
    borderRadius: 20,
    padding: 10
  }
});
export default Tickets;
