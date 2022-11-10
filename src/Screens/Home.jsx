import React, { useState } from 'react'
import {  Box,Center,Container, Pressable, useColorModeValue } from "native-base";
import {Dimensions,Text} from 'react-native'
import Color from '../components/Color'
export default function Home() {
  const [count,setCount]=useState(0)
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return (
    <Center bg={bg} height={Dimensions.get('screen').height}>
      <Container>
        <Text style={{fontSize:24,fontWeight:'bold'}}>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Text>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Pressable alignSelf='center' mt={50} onPress={()=>setCount(count+1)}>
          <Box bg="teal.400" alignSelf="center" alignItems="center" rounded="xl" size="24" safeArea>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{count}</Text>
          </Box>
        </Pressable>
        <Box alignSelf='center'>
          <Color></Color>
        </Box>
      </Container>
    </Center>
  )
}
