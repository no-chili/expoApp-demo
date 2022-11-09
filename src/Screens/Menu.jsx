import React from 'react'
import { Pressable, ScrollView,Box,Center,Text } from 'native-base'
import {Dimensions} from 'react-native'

export default function Menu({navigation}) {
  return (
    <ScrollView>
      <Center h={Dimensions.get('window').height}>
        <Pressable onPress={()=>navigation.navigate('Home')}>
          <Box bg="teal.400" rounded="xl" size="24" alignItems="center" safeArea>
            <Text>Home</Text>
          </Box>
        </Pressable>
        <Pressable mt={5} onPress={()=>navigation.navigate('Animated')}>
          <Box bg="teal.400" rounded="xl" size="24" alignItems="center" safeArea>
            <Text>Animated</Text>
          </Box>
        </Pressable>
      </Center>
    </ScrollView>
  )
}
