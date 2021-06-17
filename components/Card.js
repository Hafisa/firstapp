import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { COLORS, SIZES } from '../styles/Theme'
import Entypo from 'react-native-vector-icons/Entypo';
const Card = (props) => {
  return (
    <View style={styles.container}>
      {/**indiual card design */}
      <View style={styles.container_top}>
        <View style={styles.container_sub}>
          <View style={styles.container_top_left}>
          </View>
          <View style={styles.container_top_center}>
            <Text style={styles.ref_text}>
              Reference Number:{props.referencenumber}
            </Text>
            <Text style={styles.ref_sub_text}> WIN <Text style={styles.ref_sub_text2}>{props.name}</Text></Text>
          </View>
          <View style={styles.container_top_right}>
            <View style={styles.container_top_right_circle}>
              <Text style={styles.top_right_circle_text}>{props.id}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container_sub}>
        <View style={styles.container_bottom_left}>
          <Image
            style={styles.bottom_left_image}
            source={{
              uri: props.itemimage
            }}
          />
        </View>
        <View style={styles.container_bottom_center}>
          <View style={styles.container_bottom_center_sub}>
            <View>
              <Entypo name={"calendar"} color={COLORS.cardiconcolor} size={20} />
            </View>
            <View style={styles.container_bottom_center_sub2}>
              <Text style={styles.info_title}>Date purchased</Text>
              <Text style={styles.info_value}>{props.date}</Text>
            </View>
          </View>
          <View style={styles.container_bottom_center_sub}>
            <View>
              <Entypo name={"ticket"} color={COLORS.cardiconcolor} size={20} />
            </View>
            <View style={styles.container_bottom_center_sub2}>
              <Text style={styles.info_title}>Ticket(s) bought</Text>
              <Text style={styles.info_value}>{props.nooftickets}</Text>
            </View>
          </View>

        </View>
        <View style={styles.container_bottom_right}>
          <Image
            style={styles.bottom_right_image}
            source={{
              uri: props.wonimage
            }}
          />
        </View>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({

  container: {
    width: SIZES.width * 0.90,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.cardbordercolor,
    marginBottom: 10,
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
  },
  container_top: {
    width: SIZES.width * 0.896,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    paddingBottom: 10,
    justifyContent: "center", // main axis
    backgroundColor: COLORS.cardtopbgcolor,
  },
  container_sub: {
    flexDirection: 'row',
  },
  container_top_left: {
    width: SIZES.width * 0.10, borderTopLeftRadius: 7,
  },
  container_top_right: {
    width: SIZES.width * 0.149, borderTopRightRadius: 7, alignItems: 'flex-end', paddingRight: 1
  },
  container_top_right_circle: {
    borderRadius: 100,
    borderTopRightRadius: 7, borderBottomRightRadius: 7,
    borderTopLeftRadius: 7, width: 45, height: 40,
    backgroundColor: COLORS.cardidbgcolor,
    borderColor: COLORS.cardidbordercolor,
    borderLeftWidth: 1, borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top_right_circle_text: {
    color: COLORS.cardidtext, fontWeight: 'bold'
  },
  container_bottom_left: {
    width: SIZES.width * 0.20, borderBottomLeftRadius: 7, alignItems: 'center', justifyContent: 'center'
  },
  container_bottom_right: {
    width: SIZES.width * 0.298, borderBottomEndRadius: 7, alignItems: 'center',
  },
  container_top_center: {
    width: SIZES.width * 0.65,
  },
  container_bottom_center: {
    width: SIZES.width * 0.40, paddingTop: 5
  },
  container_bottom_center_sub: {
    flexDirection: 'row', alignItems: 'center',
    paddingBottom: 5
  },
  container_bottom_center_sub2: {
    paddingLeft: 5,
  },
  ref_text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.reftext
  },
  info_title: {
    fontSize: 7, fontWeight: '300', color: COLORS.infotitle
  },
  info_value: {
    fontSize: 10, fontWeight: 'bold', color: COLORS.infovalue
  },
  ref_sub_text: {
    color: COLORS.refsubtext1,
    fontWeight: 'bold', fontSize: 14
  },
  ref_sub_text2: {
    color: COLORS.refsubtext2,
  },
  bottom_left_image: {
    width: 50,
    height: 50
  },
  bottom_right_image: {
    width: 50,
    height: 70,
    marginTop: -20,
    resizeMode: 'stretch',
  }
});
export default Card;
