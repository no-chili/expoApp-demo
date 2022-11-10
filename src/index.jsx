import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import Menu from './Screens/Menu'
import Home from './Screens/Home'
import Animated from './Screens/Animated'
import Animation from './Screens/Animation'
import Sidebar from './components/Sidebar'
export default function Index() {
  const Drawer=createDrawerNavigator()
  return (
      <Drawer.Navigator screenOptions={{drawerPosition:'left',headerShown:false}} drawerContent={(props)=><Sidebar {...props}></Sidebar>}>
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Animated" component={Animated} />
        <Drawer.Screen name="Animation" component={Animation} />
      </Drawer.Navigator>
  )
}
