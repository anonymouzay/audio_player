import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Playlist = (props) => {
    const {imgUri, Name, Desc} = props
    return(
        // ['#30cfd0','#330867'] ['#00c6fb','#005bea']
        <LinearGradient colors={['#1e3c72','#2a5298']} style={styles.main} >
            <View style={styles.top} >
                <Image style={styles.image} source={{uri:imgUri}} ></Image>
            </View>
            <View style={styles.bottom} >
                <Text style={styles.name} >{Name}</Text>
                <Text style={styles.desc} >{Desc}</Text>
            </View>
        </LinearGradient>
    );

}

const styles = StyleSheet.create({
    main:{
        width:"45%",
        height:250,
        display:"flex",
        flexDirection:"column",
        borderRadius:20,
        overflow:"hidden",
        marginTop:20
    },
    top:{
        width:"100%",
        height:200,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },image:{
        width:"80%",
        height:"80%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    bottom:{
        width:"100%",
        height:50,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    name:{
        fontSize:20,
        color:"#fcbf1e",
        textAlign:"center"
    },
    desc:{
        fontSize:12,
        color:"#f0a500",
        textAlign:"center"
    }
});

export default Playlist;