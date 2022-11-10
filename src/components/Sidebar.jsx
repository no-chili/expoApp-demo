import { Dimensions } from 'react-native'
import React from 'react'
import {Center} from 'native-base'
import {} from 'react-native-reanimated'
import Menu from '../Screens/Menu'
export default function Slidbar(props) {
  const { state, navigation } = props
  return (
    <Center h={Dimensions.get('screen').height}>
        <Menu navigation={navigation}></Menu>
    </Center>
  )
}
