import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Audio} from 'expo-av';
import {LinearGradient} from 'expo-linear-gradient';

import Foot from "./Foot";
import BodyMusic from "./BodyMusic";
import Head from './Head';
import BodyHome from './BodyHome';

export default function App() {
  // UseState
  const [isPlaying,SetIsPlaying] = useState(false);
  const [isLooping,SetIsLooping] = useState(false);
  const [sound1,setSound1] = useState( null);
  const [pageNumber,setPageNumber] = useState(0);
  const [addSubstract,setAddSubstract] = useState(0);

  //loading audio at the start
  useEffect(() => {
    const  LoadAsync = async () => {
      try{
        const {sound} = await Audio.Sound.create(
          require("./assets/Frank_Bang.mp3"),
          {
            shouldPlay: false,
          }
        );
        setSound1(sound);
        console.log("completed")
      }
      catch(err){
        console.log(err);
      }
    }
    Audio.setAudioModeAsync({staysActiveInBackground:true,playsInSilentModeIOS:true});
    LoadAsync();

  },[]);
  //playing and pausing the sound
  useEffect(() => {
    const PlayableAsync = async () =>{
      try{
        if(isPlaying){
          await sound1.playAsync();
        }
        else{
          await sound1.pauseAsync();
        }
        let {positionMillis,durationMillis} = await sound1.getStatusAsync();
        console.log(positionMillis,durationMillis)
      }
      catch(err){
        console.log(err);
      }
    }
    PlayableAsync();
  },[isPlaying])
  //Looping
  useEffect(()=>{
    const FuncLooping = async () =>{
      try{
        await sound1.setIsLoopingAsync(isLooping);
      }
      catch(err){
        console.log(err);
      }
    }

    FuncLooping();
  },[isLooping])
  // Adding Sustracting millis
  useEffect(()=>{
    if(addSubstract==0){
      BackForward(0);
    }
    else if(addSubstract==1){
      BackForward(1);
    }
  },[addSubstract])
  const BackForward = async (num) => {
    try{
      let {positionMillis,durationMillis} = await sound1.getStatusAsync();
      let pos = positionMillis;
      let dur = durationMillis;
      switch(num){
        case 0:
          if(pos>=5000){
            pos=pos-5000;
          }else{
            pos=0;
          }
          break;
        case 1:
          if(pos<=dur-5000){
            pos=pos+5000;
          }else{
            pos=dur;
          }
          break;
      }
      await sound1.setPositionAsync(pos);
      console.log("+/- 5000 milis");
    }
    catch(err){
      console.log(err);
    }
  }

  const data=[
    {text:"Hello. This is a audio player",uri:"https://image.flaticon.com/icons/svg/565/565814.svg"},
    {text:"To go to the player itself press the 2nd button",uri:"https://image.flaticon.com/icons/svg/565/565815.svg"},
    {text:"You can go backwards and forward using the rewind button",uri:"https://image.flaticon.com/icons/svg/565/565816.svg"},
    {text:"You can loop the audio using the loop button",uri:"https://image.flaticon.com/icons/svg/565/565817.svg"},
  ]

  const SwitchStatement = ( ) => {
    switch(pageNumber){
      case 0:
        return <BodyHome data={data}></BodyHome> ;
      case 1:
        return <BodyMusic isPlaying={isPlaying} SetIsPlaying={SetIsPlaying} isLooping={isLooping} SetIsLooping={SetIsLooping} addSubstract={addSubstract} setAddSubstract={setAddSubstract} ></BodyMusic>;
      case 2:
        return;
      default:
        return;
  }
  }

  return (
    <LinearGradient colors={["#09203f","#537895"]} style={styles.mainContainer} >
      {/* Head */}
      <Head></Head>
      {/* Main */}
      {SwitchStatement()}
      {/* Foot */}
      <Foot setPageNumber={setPageNumber}></Foot>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width:"100%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
  },
});
