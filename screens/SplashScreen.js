import { View, Text, TouchableOpacity, ToastAndroid, BackHandler  } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as Updates from 'expo-updates';
import { hs, ms, vs } from './Metrics';

const SplashScreen = ({navigation}) => {
    useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),});

     componentDidMount = async ()=> {
      await onFetchUpdateAsync();
    }
  
    onFetchUpdateAsync = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
  
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (error) {
        alert(`Error fetching latest Expo update: ${error}`);
      }
    };
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
    <View style={{backgroundColor:'#5072A7', padding:2, height:vs(812), width:hs(375)}} >
        <Text style={{color:'black', fontSize:ms(180),marginHorizontal:'auto', marginTop:vs(170), fontFamily:'Play' }} > 11 </Text>
        <Text style={{ fontSize:ms(33), fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', top:vs(-220), marginHorizontal:hs(120)  }} >Xchanger</Text>

        <TouchableOpacity onPress={()=>{
                navigation.navigate('SplashScreen1')
        }}
      style={{padding:20, backgroundColor:'white', width:hs(300), marginHorizontal:'auto', borderRadius:13, top:vs(-30) }} >
            <Text style={{textAlign:'center', fontSize:16, fontFamily:'Sans' }} >
                Get Started
            </Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center', color:'white', top:vs(-30), }} > A Currency-Converter-App Project, Designed and Implemented {'\n'} By {'\n'}  Fss/comp/com324/GRP11 {'\n'}   ©️ </Text>
      
    </View>
  )
}

export default SplashScreen