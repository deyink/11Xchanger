import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const SplashScreen2 = ({navigation}) => {
    useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),});

  return (
    <View style={styles.Bg} >
        <View style={styles.Dbg} > 
            <Image style={styles.Image} source={require('../assets/icons/xchange.png')}  />
        </View>

        <Text style={{fontFamily:'Sans', color:'white', fontSize:24, textAlign:'center', fontWeight:'650'}} > How It Works ? </Text>

        <Text  style={{fontFamily:'Sans', color:'white', fontSize:16, textAlign:'center', marginHorizontal:'3%', marginTop:'10%'}} > Our Currency-Converter-App Make Use of  a Real Time Update API, That gives Accurrate Rate Value as at the Time of Exchange.  </Text>

        <TouchableOpacity onPress={ ()=>{
            navigation.navigate('HomePage')
            Alert.alert('This is a Project Done By Students of Federal College of Statistics Ibadan Campus,')
        }

        }  style={{ top:'10%', right:'-70%', padding:10,  backgroundColor:'#4682B4', width:'30%' }} >
            
        <Text style={{textAlign:'right', color:'white', fontSize:18, }}  > Start → </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SplashScreen2

const styles = StyleSheet.create({
    Bg:{
        width:'100%',
        height:'100%',
        backgroundColor:'#5072A7'
    },
    Dbg:{
        height:'60%',
        width:'100%',
        backgroundColor:'#4682B4',
        borderRadius:100,
        top:'-10%'
    },
    Image:{
        top:'38%',
        marginHorizontal:'auto'
    }
})