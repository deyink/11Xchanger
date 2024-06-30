import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';

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
    <View style={{backgroundColor:'#FCFBF4', padding:0, height:'100%', width:'100%', paddingTop:'80%' }} >

  <Image style={{marginHorizontal:'auto'}} source={require('../assets/icons/ani.gif')} />

<View style={{backgroundColor:'#5072A7', top:'5%', borderRadius:30 , height:'90%', padding:5  }} >
<Text style={{color:'black', fontSize:90,marginHorizontal:'auto', marginTop:'5%', fontFamily:'Play' }} > 11 </Text>
<Text style={{ fontSize:16, fontFamily:'Play', backgroundColor:'#5072A7', color:'#fffcf3', width:'100%', top:'-28%', marginHorizontal:'40%'  }} >Xchanger</Text>
<Text style={{ fontWeight:'700', fontSize:13 }} >  {'\n'} {'\n'} powered By </Text>
<Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:'700'  }} > Fss/com/com324/GRP11 ©️ </Text>
</View>
</View>
  )
}

   


export default OnLoad