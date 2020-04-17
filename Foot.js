import React, { useState } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Foot = ( props ) =>{
    const [isOver1,setIsOver1] = useState(false);
    const [isOver2,setIsOver2] = useState(false);
    const [isOver3,setIsOver3] = useState(false);

    const {setPageNumber} = props;

    return(
        <View style={styles.footCont} >
          <LinearGradient colors={["#30cfd0","#330867"]} style={isOver1?styles.hoverClass:styles.buttons} onTouchStart={()=>{setIsOver1(true);setPageNumber(0);}} onTouchEnd={()=>{setIsOver1(false)}} >
            <Image source={require('./assets/navbar/house.png')} style={{width:"50%", height:"50%"}} blurRadius={isOver1?7:0} ></Image>
          </LinearGradient>
          <LinearGradient colors={["#30cfd0","#330867"]} style={isOver2?styles.hoverClass:styles.buttons} onTouchStart={()=>{setIsOver2(true);setPageNumber(1);}} onTouchEnd={()=>{setIsOver2(false)}} >
            <Image source={require('./assets/navbar/headphone.png')} style={{width:"50%", height:"50%"}} blurRadius={isOver2?7:0} ></Image>
          </LinearGradient>
          <LinearGradient colors={["#30cfd0","#330867"]} style={isOver3?styles.hoverClass:styles.buttons} onTouchStart={()=>{setIsOver3(true);setPageNumber(2);}} onTouchEnd={()=>{setIsOver3(false)}} >
            <Image source={require('./assets/navbar/microphone.png')} style={{width:"50%", height:"50%"}} blurRadius={isOver3?7:0} ></Image>
          </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    footCont:{
        height:"10%",
        width:"80%",
        backgroundColor:"#053f5e",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
      },
      buttons:{
          width:55,
          height:55,
          backgroundColor:"#fff",
          borderRadius:50,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          position:"relative",
          top:0,
          
      },
      hoverClass:{
        width:55,
        height:55,
        backgroundColor:"#fff",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:-10,
        shadowOffset:{  width: 0,  height: 20,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius: 16.00,
        elevation: 40,
      }
});

export default Foot;