import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {COLORS,SIZES} from '../styles/Theme'
import Entypo from 'react-native-vector-icons/Entypo';
const Card = () => {
  return (
<View style={styles.container}>
  <View style={styles.container_top}>
    <View style={styles.container_sub}>
    <View style={styles.container_top_left}>
    </View>
    <View style={styles.container_top_center}>
      <Text style={styles.ref_text}>
        Reference Number:7468902 -WL
        </Text>
      <Text style={styles.ref_sub_text}> WIN <Text style={styles.ref_sub_text2}>MERCEDES GTS 2020</Text></Text>
    </View>
    <View style={styles.container_top_right}>
   <View style={styles.container_top_right_circle}>
   <Text style={styles.top_right_circle_text}>2</Text>
   </View>
    </View>
    </View>
  </View>
  <View style={styles.container_sub}>
  <View style={styles.container_bottom_left}>
  <Image
        style={styles.bottom_left_image}
        source={require('../assets/jacket.jpg')}
      />
    </View>
    <View style={styles.container_bottom_center}>
      <View style={styles.container_bottom_center_sub}>
        <View>
        <Entypo name={"calendar"} color={'#045FB4'} size={20} />
        </View>
      <View style={styles.container_bottom_center_sub2}>
        <Text style={styles.info_title}>Date purchased</Text>
        <Text style={styles.info_value}>18/02/2020</Text>
      </View>
      </View>
      <View style={styles.container_bottom_center_sub}>
        <View>
        <Entypo name={"ticket"} color={'#045FB4'} size={20} />
        </View>
      <View style={styles.container_bottom_center_sub2}>
        <Text style={styles.info_title}>Ticket(s) bought</Text>
        <Text style={styles.info_value}>2</Text>
      </View>
      </View>
      
    </View>
    <View style={{width:SIZES.width*0.298,borderBottomEndRadius:7,alignItems:'center',}}>
    <Image
        style={styles.bottom_right_image}
        source={require('../assets/goldbiscuits.png')}
      />
    </View>
  </View>
</View>
  )
};
const styles = StyleSheet.create({
  
    container: {
      width:SIZES.width*0.81,
      borderRadius:7,
      borderWidth:1,
      borderColor:'#efeded',
      marginBottom:10,
      // flex: 1,
    
      
    //   paddingTop:0,
      // flexDirection: "column", // main axis
      justifyContent: "center", // main axis
      alignItems: "center", // cross axis
      // backgroundColor: 'red',
    },
    container_top:{
      width:SIZES.width*0.80,
      // borderRadius:7,
      // flex: 1,
      borderTopLeftRadius:7,
      borderTopRightRadius:7,
  paddingBottom:10,
    //   paddingTop:0,
      // flexDirection: "column", // main axis
      justifyContent: "center", // main axis
      // alignItems: "center", // cross axis
      backgroundColor: '#F8FBEF',
    },
    container_sub:{
      flexDirection:'row',
    },
    container_top_left:{
      width:SIZES.width*0.10, borderTopLeftRadius:7,
    },
    container_top_right:{
      width:SIZES.width*0.149,borderTopRightRadius:7,alignItems:'flex-end',
    },
    container_top_right_circle:{
      borderRadius:100,borderTopRightRadius:7,borderBottomRightRadius:7,
      borderTopLeftRadius:7,width:45,height:40,
      backgroundColor:'#fff',borderColor:'#efeded',
      borderLeftWidth:1,borderBottomWidth:1,
      alignItems:'center',
      justifyContent:'center'
    },
    top_right_circle_text:{
      color:'red',fontWeight:'bold'
    },
    container_bottom_left:{
      width:SIZES.width*0.20, borderBottomLeftRadius:7,alignItems:'center',
    },
    container_top_center:{
      width:SIZES.width*0.55,
    },
    container_bottom_center:{
      width:SIZES.width*0.30,paddingTop:5
    },
    container_bottom_center_sub:{
      flexDirection:'row',alignItems:'center',
     paddingBottom:5
    },
    container_bottom_center_sub2:{
      paddingLeft:5  ,
    },
    ref_text:{
      fontSize:12,
      fontWeight:'bold',
      color:'#c0c0c0'
    },
    info_title:{
      fontSize:7,fontWeight:'300',color:'#084B8A'
    },
    info_value:{
      fontSize:10,fontWeight:'bold',color:'#c0c0c0'
    },
    ref_sub_text:{
      color:'#DF0101',
      fontWeight:'bold',fontSize:14
    },
    ref_sub_text2:{
      color:'#113d88'
    },
    bottom_left_image:{
      width:50,
      height:50
    },
    bottom_right_image:{
      width:50,
      height:70,
      marginTop:-20,
      resizeMode: 'stretch',
      
    }
  });
export default Card;