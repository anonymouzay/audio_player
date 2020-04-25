import React, { useState } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const FeedComponent = (props) =>{

    const {src,imgUri,songName,autherName,likes} = props;

    const changeTheSong = () =>{

    }

    return(
        <View style={styles.main} >
            {/* Image */}
            <View style={styles.imgBox} >
                <Image source={{uri:imgUri}} style={styles.img}/>
            </View>
            {/* Name & duration */}
            <View style={styles.infoBox} >
                {/* Top */}
                <View style={styles.Top}>
                    <Text style={styles.song}>{songName}</Text>
                    <Text style={styles.auther} >{autherName}</Text>
                </View>
                {/* Bottom */}
                <View style={styles.Bottom} >
                    <View style={styles.likes}>
                        <Image source={ require('./assets/headphones.png') } style={styles.like} ></Image>
                        <Text style={styles.justText} >{likes}</Text>
                    </View>
                    <View>
                        <Text style={styles.justText} >Duration:20</Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    main:{
        width:"90%",
        height:80,
        backgroundColor:"#035aa6",
        margin:10,
        borderRadius:5,
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    infoBox:{
        width:"60%",
        height:65,
        backgroundColor:"#120136"
    },
    Top:{
        width:"100%",
        height:"60%",

        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    song:{
        fontSize:18,
        color:"#fcbf1e",
        fontWeight:"700"
    },
    auther:{
        fontSize:12,
        color:"#40bad5"
    },
    Bottom:{
        width:"100%",
        height:"40%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    likes:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:32
    },
    justText:{
        color:"#035aa6"
    },
    like:{
        width:16,
        height:16,
        // backgroundColor:"#fff"
    },
    imgBox:{
        width:65,
        height:65,
        backgroundColor:"#120136",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width:55,
        height:55,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default FeedComponent;