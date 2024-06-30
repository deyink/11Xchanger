import { View, Text, StyleSheet, Image, TouchableOpacity, BackHandler, ToastAndroid,  } from 'react-native'
import React, {useEffect} from 'react'
import { useFonts } from 'expo-font';


const SplashScreen1 = ({navigation}) => {
    useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),});

    useEffect(() => {
        const backAction = () => {
          ToastAndroid.show("Exiting the app", ToastAndroid.SHORT);
          BackHandler.exitApp();
          return true;
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
       return () => backHandler.remove(); // Cleanup the backHandler on component unmount
      }, []);

  return (
    <View style={styles.Bg} >
        <View style={styles.Dbg} > 
            <Image style={styles.Image} source={require('../assets/icons/man.png')}  />
        </View>

        <Text style={{fontFamily:'Sans', color:'white', fontSize:24, textAlign:'center', fontWeight:'650'}} > You've Been Thinking ? </Text>

        <Text  style={{fontFamily:'Sans', color:'white', fontSize:16, textAlign:'center', marginHorizontal:'3%', marginTop:'10%'}} >Have You Been Thinking Where to Exchange Your Currency Without Hassle, This is a currency converting Platform that depicts relational Value. With Over 200 currencies Spent Across The Globe</Text>

        <TouchableOpacity onPress={ ()=> navigation.navigate('SplashScreen2')} style={{ top:'10%', right:'-70%', padding:10,  backgroundColor:'#5D8AA8', width:'30%' }} >
            
        <Text style={{textAlign:'right', color:'white', fontSize:18, }}  > Next → </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SplashScreen1

const styles = StyleSheet.create({
    Bg:{
        width:'100%',
        height:'100%',
        backgroundColor:'#5072A7'
    },
    Dbg:{
        height:'60%',
        width:'100%',
        backgroundColor:'#5D8AA8',
        borderRadius:100,
        top:'-10%'
    },
    Image:{
        top:'24%',
        marginHorizontal:'auto'
    }
})