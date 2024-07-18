import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';
import { hs, ms, vs } from './Metrics';

const OnLoad = ({navigation}) => {
  const[loadP]= useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf')});
  const[loadS]= useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')});
  const[loadR]= useFonts({Roboto:require('../assets/fonts/Roboto.ttf')})

  // if(!loadP || !loadR || !loadS){
  //   Load
  //   // <Image style={{marginHorizontal:'auto'}} source={require('../assets/icons/ani.gif')} />
  //   // <Image source={require('../assets/icons/Loading.gif')} />
  // } else {
  //   Load
    
  // } }

  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.navigate('SplashScreen');
    }, 10000); // 5 seconds delay
    return () => clearTimeout(interval); // Cleanup the interval if the component unmounts
  }, [{navigation}]);

  return(
    <View style={{backgroundColor:'#FCFBF4', padding:0, height:vs(812), width:hs(375), paddingTop:vs(300) }} >

  <Image style={{marginHorizontal:'auto'}} source={require('../assets/icons/ani.gif')} />

<View style={{backgroundColor:'#5072A7', top:vs(30), borderRadius:30 , height:vs(700), padding:ms(5)  }} >
<Text style={{color:'black', fontSize:ms(90),marginHorizontal:'auto', marginTop:ms(10), fontFamily:'Play' }} > 11 </Text>
<Text style={{ fontSize:ms(16), fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', bottom:vs(100), marginHorizontal:hs(150)  }} >Xchanger</Text>
<Text style={{fontSize:ms(13), textAlign:'center', top:vs(40) }} >  {'\n'} {'\n'} Powered by </Text>
<Text style={{fontFamily:'Roboto', fontSize:ms(17), textAlign:'center', fontWeight:'700', top:vs(33)  }} > FSS/Com/Com324/GRP11 ©️ </Text>
</View>
</View>
  )
}

   


export default OnLoad