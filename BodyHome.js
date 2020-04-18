import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const BodyHome = (props) => {
    const {data}=props;
    return(
        <LinearGradient colors={["#2af598", "#009efd"]} style={styles.mainCont}>
            {data.map((i,index) => {
                if((index+1)%2==0){
                    return(
                        <View style={styles.partComp2}>
                            <View style={styles.firstComp} >
                                <Image source={{uri:i.uri}} style={styles.icon} />
                            </View>
                            <View style={styles.secondComp} >
                                <Text style={styles.text} >{i.text}</Text>
                            </View>
                        </View>
                    );
                }else{
                    return(
                        <View style={styles.partComp1}>
                            <View style={styles.firstComp} >
                                <Image source={{uri:i.uri}} style={styles.icon} />
                            </View>
                            <View style={styles.secondComp} >
                                <Text style={styles.text} > {i.text} </Text>
                            </View>
                        </View>
                    );
                }
            })}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainCont:{
        width:"80%",
        height:"70%",
        borderRadius:50,
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },
    partComp1:{
        width:"80%",
        height:"20%",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        backgroundColor:"#1f4287",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"  
    },
    partComp2:{
        width:"80%",
        height:"20%",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        backgroundColor:"#071e3d",
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        alignSelf:"flex-end"
    },
    icon:{
        width:50,
        height:50
    },
    firstComp:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"30%",
        height:"100%"
    },
    secondComp:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"60%",
        height:"100%"
    },
    text:{
        fontSize:16,
        fontWeight:600,
        color:"rgb(21,146,121)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
});

export default BodyHome;