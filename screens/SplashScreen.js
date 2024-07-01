import { View, Text, TouchableOpacity, ToastAndroid, BackHandler  } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as Updates from 'expo-updates';

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
    <View style={{backgroundColor:'#5072A7', padding:2, height:'100%', width:'100%'}} >
        <Text style={{color:'black', fontSize:210,marginHorizontal:'auto', marginTop:'28%', fontFamily:'Play' }} > 11 </Text>
        <Text style={{ fontSize:34, fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', top:'-32%', marginHorizontal:'30%'  }} >Xchanger</Text>

        <TouchableOpacity onPress={()=>{
                navigation.navigate('SplashScreen1')
              
        }}
      style={{padding:20, backgroundColor:'white', width:'90%', marginHorizontal:'auto', borderRadius:13, top:'-1%'    }} >
            <Text style={{textAlign:'center', fontSize:16, fontFamily:'Sans' }} >
                Get Started
            </Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center', color:'white', top:'1%', }} > A Currency-Converter-App Project, Designed and Implemented By {'\n'}  Fss/comp/com324/GRP11 {'\n'}   ©️ </Text>
      
    </View>
  )
}

export default SplashScreen