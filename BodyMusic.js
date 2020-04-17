import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const BodyMusic = ( props ) =>{
    const {isPlaying,SetIsPlaying,isLooping,SetIsLooping,setAddSubstract,addSubstract} = props;
    return(
      <View style={styles.bodyCont} >
        <View style={styles.partCont} >
          <View style={styles.buttons} onTouchStart={()=>{SetIsLooping(!isLooping);}} >
            <Image source={require('./assets/Sound/repeat.png')} style={{width:"100%", height:"100%"}} ></Image>
          </View>
          <View style={styles.buttons} >
            <Image source={require('./assets/Sound/music-player.png')} style={{width:"100%", height:"100%"}} ></Image>
          </View>
        </View>
        <View style={styles.centerCont} >
          <Image style={{width:"100%",height:"100%"}} source={require("./assets/back1.jpg")}></Image>
        </View>
        <View style={styles.partCont} >
          <View style={styles.buttons} onTouchStart={()=>{setAddSubstract(0)} } onTouchEnd={()=>{setAddSubstract(3)}} >
            <Image source={require('./assets/Sound/rewind.png')} style={{width:"100%", height:"100%"}} ></Image>
          </View>
          <View style={styles.buttons} onTouchStart={()=>{SetIsPlaying(!isPlaying)}} >
            <Image source={isPlaying? require("./assets/Sound/pause.png") :require('./assets/Sound/play-button.png')} style={{width:"100%", height:"100%"}} ></Image>
          </View>
          <View style={styles.buttons} onTouchStart={()=>{setAddSubstract(1)}} onTouchEnd={()=>{setAddSubstract(3)}} >
            <Image source={require('./assets/Sound/play.png')} style={{width:"100%", height:"100%"}} ></Image>
          </View>
        </View>
      </View>
    );
    }
const styles = StyleSheet.create({
    bodyCont:{
        width:"80%",
        height:"70%",
        borderRadius:50,
        overflow:"hidden",
        backgroundColor:"rgba(2,23,43,0.2)",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly"
      },
      partCont:{
        height:"15%",
        width:"80%",
        backgroundColor:"#053f5e",
        borderRadius:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row"
      },
      centerCont:{
        width:"80%",
        height:"60%",
        borderRadius:50,
        overflow:"hidden"
      },
      buttons:{
        width:"15%",
        height:"42%",
        backgroundColor:"#ffd700",
        borderRadius:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        padding:5
      }
});

export default BodyMusic;