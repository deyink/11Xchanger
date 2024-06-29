import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';

const OnLoad = ({navigation}) => {
  useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf')});
  useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')});

  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.navigate('SplashScreen');
    }, 5000); // 5 seconds delay
    return () => clearTimeout(interval); // Cleanup the interval if the component unmounts
  }, [{navigation}]);

  return(
    <View style={{backgroundColor:'white', padding:2, height:'100%', width:'100%', paddingTop:'80%' }} >

  <Image style={{marginHorizontal:'auto'}} source={require('../assets/icons/ani.gif')} />

  <Text style={{textAlign:'center', color:'black', top:'50%', marginHorizontal:'3%' }} > A Currency Converter App Project, Designed and Implemented {'\n'} {'\n'} By {'\n'} {'\n'}  Fss/comp/com324/GRP11 {'\n'} {'\n'}   ©️ </Text>
</View>
  )
}

   


export default OnLoad