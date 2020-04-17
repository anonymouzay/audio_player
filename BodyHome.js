import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const BodyHome = () => {
    const [text,setText] = useState([
        "Hello user",
        "This is experimental app for audio",
        "So please leave feedback"       
    ]);
    const [text1,setText1] = useState([
        "",
        "",
        ""       
    ]);
    const [num,setNum] = useState(0);
    const [i,setI] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(i<=text[num].length){
                let j = i+1;
                console.log(j)
                setI(j);
            }
            else if(num<=text.length){
                setNum(num+1);
            }
            console.log(i,num);
        },1000);
    },[]);
    useEffect(( ) => {
        let textArr=[text1[0],text[1],text[2]];
        textArr[num] = textArr[num] + text[num][i];
        setText1(textArr);
    }, [i,num])
    return(
        <LinearGradient colors={["#2af598", "#009efd"]} style={styles.mainCont}>
            <View>
                <Text>{text1[num]}</Text>
            </View>
            <View>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainCont:{
        width:"80%",
        height:"70%",

    }
});

export default BodyHome;