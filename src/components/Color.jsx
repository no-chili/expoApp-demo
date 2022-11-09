import { Text } from 'react-native'
import React from 'react'
import { Box, Button, Pressable, useColorMode, useColorModeValue } from 'native-base';

export default function Color() {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode()
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return (
    <Box>
      <Pressable alignSelf='center' mt={50}>
        <Box bg={bg} alignSelf="center" alignItems="center" rounded='xl' size="24" safeArea>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{colorMode==='light'?"Lgint":"Dark"}</Text>
        </Box>
      </Pressable>
      <Button mt={10} onPress={()=>{toggleColorMode()}} w={200} alignSelf='center' h={10}>
        Toggle
      </Button>
    </Box>
  )
}
