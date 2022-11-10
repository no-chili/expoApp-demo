import React from 'react'
import { Pressable, CheckIcon,Box,Center,Text } from 'native-base'
import {Dimensions} from 'react-native'

export default function Menu({navigation}) {
  return (
      <Center h={Dimensions.get('window').height}>
        <Pressable onPress={()=>navigation.navigate('Home')}>
          <Box bg="teal.400" rounded="xl" size="24" alignItems="center" safeArea>
            <CheckIcon size="5" mt="0.5" color="emerald.500" />
            <Text>Home</Text>
          </Box>
        </Pressable>
        <Pressable mt={5} onPress={()=>navigation.navigate('Animated')}>
          <Box bg="teal.400" rounded="xl" size="24" alignItems="center" safeArea>
            <Text>Animated</Text>
          </Box>
        </Pressable>
        <Pressable mt={5} onPress={()=>navigation.navigate('Animation')}>
          <Box bg="teal.400" rounded="xl" size="24" alignItems="center" safeArea>
            <Text>Animation</Text>
          </Box>
        </Pressable>
      </Center>
  )
}
