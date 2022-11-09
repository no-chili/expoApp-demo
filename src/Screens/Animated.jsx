import { Dimensions } from 'react-native'
import React from 'react'
import {Center,Box, Button} from 'native-base'
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from 'react-native-reanimated'
export default function Animate() {
  const offset=useSharedValue(0)
  const offsetAnimation=useAnimatedStyle(()=>{
    return {
      transform:[{translateX:withSpring(offset.value*255)}]
    }
  })
  return (
    <Center height={Dimensions.get('window').height}>
      <Animated.View style={[offsetAnimation]}>
        <Box bg='teal.400' w={100} h={100} rounded={10} alignItems='center' safeArea>BOX</Box>
      </Animated.View>
      <Button mt={10} onPress={()=>offset.value=-Math.random()+0.5}>Click Me</Button>
    </Center>
  )
}
