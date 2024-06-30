import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';




const Homepage = () => {
    const [clear, setClear] = useState(null)
    const [info, setInfo] = useState(0); // exchange rate
    const [currencies, setCurrencies] = useState({}); //Currency
    const [input, setInput] =useState(0);       //Amount
    const [output, setOutput] = useState(0);      //
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('NGN')
    const [loadedP] = useFonts({Play:require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),});
    const [loadedS] = useFonts({Sans:require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),});
    

    const convert = ()=>{
      let result = (input * info).toFixed(2);
      setOutput(result);
    }

    const handleInput=(e)=>{
      inputEvent = e.nativeEvent.text
      setInput(inputEvent);
      convert();
      inputEvent.length === 0 ? setClear(true) : setClear(false) 
    }
 

    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/3429a6d8dbf9af491e66dbff/latest/USD`)
        .then(response => {
          setCurrencies(response.data.conversion_rates);
          setInfo(response.data.conversion_rates
           [to] )
          
        })
        .catch(error => {
          console.error('Error fetching the currency data:', error);
          
        });
    }, [to]);  

    useEffect(() => {
      axios.get(`https://v6.exchangerate-api.com/v6/3429a6d8dbf9af491e66dbff/latest/${from}`)
      .then(response => {
        setCurrencies(response.data.conversion_rates);
        setInfo(response.data.conversion_rates
         [to] )
        
      })
      .catch(error => {
        console.error('Error fetching the currency data:', error);
        
      });
  }, [from, to]);  

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
    <View style={{backgroundColor:'gray', height:'100%', width:'100%', paddingHorizontal:'.5%' }} >

      <View style={{backgroundColor:'#5072A7', height:'65%', width:'100%', top:'-10%', borderRadius:60, paddingHorizontal:'2%' }} >

            <Text style={{color:'#fffcf3', marginTop:'30%', marginHorizontal:'auto', fontSize:24, fontFamily:'Play' }} > 11 Xchange  </Text>

            <Text style={{color:'#fffcf3', marginHorizontal:'auto', fontSize:21, fontFamily:'Sans' }} > Converter</Text>

            <View style={{flexDirection:'row', marginTop:'10%', flexDirection:'row', alignItems:'center', justifyContent:'center',  justifyContent:'space-evenly'}} >

            <Picker style={styles.picker}
          selectedValue={from}
          onValueChange={(itemValue) => setFrom(itemValue)}>
            {Object.keys(currencies).map((currency) =>
            (<Picker.Item key={currency} label={currency} value={currency} /> ))}
    

        </Picker>
        <Picker style={styles.picker}
          selectedValue={to}
          onValueChange={(itemValue, ) => setTo(itemValue)}>
            {Object.keys(currencies).map((currency)=>(
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}

        </Picker>
        </View>

        </View>

        <View style={{backgroundColor:'white', height:'60%', width:'93%', padding:'5%',  marginHorizontal:'auto', top:'-28%', borderRadius:20 }} >
    

            {/* <Text style={{fontSize:13}} >from</Text>
            <HorizontalLine /> */}
            {/* <Text> {selectedFro} </Text> */}
            <TextInput keyboardType='numeric' onChange={ (e)=> handleInput(e) } 
              style={{height:35, width:'99%', color:'black', borderWidth:.5, borderRadius:10, placeholder:'Enter Amount', height:'12%', paddingHorizontal:10, fontSize:20, marginTop:'5%'  }} ></TextInput>

            
       

          <TouchableOpacity onPress={()=>convert()} style={{padding:16, marginTop:'10%', backgroundColor:'#5072A7', borderRadius:50 }} >
            <Text style={{textAlign:'center', color:'white', fontFamily:'Sans', fontSize:16 }} > CONVERT </Text>
          </TouchableOpacity>


          <Text style={{bottom:'-10%', textAlign:'right'}} > {from} {input} =  {output.toLocaleString()} {to}  </Text>

          <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop:'40%'}} >
            <View>
            <Image source={require('../assets/icons/like.png')} />
            <Text style={{fontWeight:'600'}} >Like</Text>
            </View>

            <View>
            <Image source={require('../assets/icons/share.png')} />
            <Text style={{fontWeight:'500'}} >Share</Text>
            </View>

          </View>
        </View>

     
      </View>
    
  )
}


export default Homepage

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fffcf3',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    height:'44%',
    width:'40%',
    borderRadius:20,
    paddingHorizontal:20
},
icon: {
    marginRight: 5,
    width: 18,
    height: 18,
},
item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
textItem: {
    flex: 1,
    fontSize: 16,
    
},
picker:{
  height:50,
  marginHorizontal:10,
  flex: 1,
  backgroundColor:'#fffcf3',
  borderRadius:200
  
}
})



