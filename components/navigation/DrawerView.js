import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import icons(Importación de iconos para el drawer)
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerView( props ){


  return(

      //Creation of container for drawer principal view(Creación de contenedor para mostrar la interfaz principal del drawer)
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>
                <Text style={styles.title_txt}>UDB</Text>
                <Image source={require('../../assets/man.png')} style={styles.image} />
                <Text style={styles.mail_txt}>{global.iduser}</Text>
            </View>
            
            <DrawerItemList {...props}/>

            <View style={styles.logout_container}>
              <Icon.Button 
              name='log-out-outline' 
              size={25} 
              color={'#fff'}
              backgroundColor={'#091353'}
              onPress={ () => {
                //alert("Ha cerrado sesion")
                props.navigation.navigate('Login')
              }}>
                <Text style={styles.logout_txt}>Cerrar Sesion</Text>
              </Icon.Button>            
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerHead:{
      backgroundColor:'#091353',
      height:'100%',
    },
    container: {
      justifyContent: 'center',
      height: "auto",
    },
    title_txt:{
      color:'#F19022', 
      fontWeight:'bold', 
      marginLeft:20,
      fontSize:40,
    },
    image:{
      height:90,
      width:90,
      padding:20,
      margin:10,
      marginLeft:'30%', 
      marginBottom:20,
    },
    mail_txt:{
      fontSize:18,
      padding:20,
      color:'#fff',
      marginLeft:10,
    },
    logout_container: {
        flex: 1,
        marginTop:'8%',
        height: "auto",
      },
    logout_txt:{
      fontSize:18,
      padding:10,
      color:'#fff',
    },
  });

