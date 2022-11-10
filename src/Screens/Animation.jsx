import { Center ,Box} from 'native-base'
import React from 'react'
import {Dimensions} from 'react-native'
import Animated,{} from 'react-native-reanimated'

export default function Animation() {
  const AnimatedBox=Animated.createAnimatedComponent(Box)
  
  return (
    <Center alignItems='center' height={Dimensions.get('screen').height}>
      <AnimatedBox>123</AnimatedBox>
    </Center>
  )
}
