//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Component } from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, CheckBox,  } from 'react-native';
import { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';//import icons(Importación de iconos)



export default function Login({navigation}) {

    const [user, setUser] = useState('');//Variable for get the input user(variable para capturar el input de usuario)
    const [password, setPassword] = useState('');//Variable for get the input password(variable para capturar el input de contraseña)
    const [showhide, setShowhide] = useState(true);//Variable to protect the password(variable para mostrar y esconder la contraseña)
    const [loading, setLoading] = useState(false);//variable for loading spinner(variable para el spinner de loading)

    function startLoading(succes,time){
        setLoading(true);
        setTimeout(() => {
        if(!succes)
            alert('Ingresar todos los datos')
        setLoading(false);
        }, time);
    };


  return (
    <ScrollView style={styles.scroll_container}>
            <View style={styles.container}>  
                <Spinner
                  //visibility of Overlay Loading Spinner
                  visible={loading}
                  //Text with the Spinner
                  textContent={'Loading...'}
                  //Text style of the Spinner Text
                  textStyle={{color:'#FFFFFF',}}
                />              
                <Image source={require('../../assets/logo.png')} style={styles.image} />
                <TextInput style={styles.inputTxt} placeholder='Example@gmail.com' onChangeText={user => setUser(user)} defaultValue={user} placeholderTextColor={'white'}/>
                <TextInput style={styles.inputTxt} placeholder='Password' onChangeText={password => setPassword(password)} defaultValue={password} secureTextEntry={showhide} placeholderTextColor={'white'}/> 
                <Icon.Button 
                    name={showhide?'eye':'eye-off'} 
                    color={'white'} size={15} 
                    backgroundColor={'#091353'}
                    onPress={() => showhide? setShowhide(false):setShowhide(true)}>
                    <Text style={styles.showhide_txt}>{showhide?'Mostrar contraseña':'Ocultar contraseña'}</Text>
                </Icon.Button>
                <Button  title='Login' color={'#F19022'} onPress={() => {         
                    if (user!='' && password!='') {
                        global.iduser=user;
                        startLoading(true,500);  
                        navigation.navigate('Main');
                        setUser('');
                        setPassword('');
                    }
                    else{
                      startLoading(false,2000) 
                    }
                }}/>
            </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    scroll_container: {
        backgroundColor: '#091353'/*'#fff'*/,
    },
    container: {
      flex: 1,
      marginTop:'40%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:'30%',
    },
    image:{
        height: 280, 
        width: 280, 
        margin:10,
    },
    inputTxt:{
        backgroundColor:'#72789A',
        padding:15,
        margin:10,
        borderRadius:10,
        borderColor:'black',
        borderWidth:5,
        color:'white',
        width:'70%',
        textAlign:'center',
    },
    showhide:{
        padding:10,
        backgroundColor:'green',
    },
    showhide_txt:{
        color:'white',
    },
})