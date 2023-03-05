import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Details from '../screens/Details'
import Image from '../screens/Image'
import Favorite from '../screens/Favorite'
import DrawerView from './DrawerView'
import Icon from 'react-native-vector-icons/Ionicons'

 const Drawer=createDrawerNavigator();

export default function Drawer_Navigation({navigation}){ 

  return(
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" drawerContent={props => <DrawerView {... props}/>}
            screenOptions={({route})=>({
              drawerIcon:({focused,color,size})=>{
                let iconName

                switch(route.name) {
                    case 'Home':
                      iconName = focused ? 'home-sharp' : 'home-outline';
                        break;
                    case 'Details':
                      iconName = focused ? 'aperture-sharp' : 'aperture-outline';
                        break;
                    case 'Image':
                      iconName = focused ? 'easel-sharp' : 'easel-outline';
                        break;
                    case 'Favorite':
                      iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                        break;
                }
                size= focused ? 35 : 20;
                return <Icon name={iconName} size={size} color={color} />;
              },
              headerTintColor:'#fff',
              headerStyle:{
                backgroundColor: '#9FC73A',
              },
              drawerActiveTintColor: '#F19022',
              drawerInactiveTintColor:'#fff',
              drawerLabelStyle: {
              fontSize: 20
            },
            })}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Image" component={Image} />
        <Drawer.Screen name="Favorite" component={Favorite} />
      </Drawer.Navigator>
  )
  
}