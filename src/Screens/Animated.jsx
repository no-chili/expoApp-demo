import { Dimensions,StyleSheet,Text } from 'react-native'
import React from 'react'
import {Center, Button} from 'native-base'
import {TapGestureHandler,GestureDetector,Gesture} from 'react-native-gesture-handler'
import Animated,{useSharedValue,useAnimatedStyle,withSpring,withRepeat,withTiming,withSequence, useAnimatedGestureHandler} from 'react-native-reanimated'
export default function Animate() {
  const offset=useSharedValue(0)
  const offsetAnimation=useAnimatedStyle(()=>{
    return {
      transform:[{translateX:withSpring(offset.value*255,{
        damping: 20,
        stiffness: 90,
      })}]
    }
  })
  const rotate=useSharedValue(0)
  const rotationAnimation=useAnimatedStyle(()=>{
    return {
      transform:[{rotateZ:`${rotate.value}deg`}]
    }
  })
  const pressed = useSharedValue(false);
  const eventHandle=useAnimatedGestureHandler({
    onStart(e,ctx){
      pressed.value=true
    },
    onActive(e,ctx){
      
    },
    onFinish(){
      pressed.value=false
    }
  })
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{ scale: withSpring(pressed.value ? 1.1 : 1)}],
    };
  });
  function updateAnimated(){
    offset.value=-Math.random()+0.5
    rotate.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withRepeat(withTiming(10, { duration: 100 }), 6, true),
      withTiming(0, { duration: 50 })
    );
  }
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const goffset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [
      { translateX: goffset.value.x },
      { translateY: goffset.value.y },
      { scale: withSpring(isPressed.value ? 1.2 : 1) },
    ],
    backgroundColor: isPressed.value ? 'yellow' : 'blue',
  }
  });
  const gesture=Gesture.Pan()
  .onBegin(() => {
    isPressed.value = true;
  })
  .onUpdate((e) => {
    offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y,
    };
  })
  .onEnd(() => {
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
  })
  .onFinalize(() => {
    isPressed.value = false;
  });
  return (
    <Center height={Dimensions.get('window').height}>
      <Animated.View style={[styles.box,rotationAnimation]}>
        <Text>BOX</Text>
      </Animated.View>
      <Animated.View style={[styles.box,offsetAnimation]}>
        <Text>BOX</Text>
      </Animated.View>
      <TapGestureHandler onGestureEvent={eventHandle}>
      <Animated.View style={[styles.box,uas]}>
        <Text>BOX</Text>
      </Animated.View>
      </TapGestureHandler>
      <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball,animatedStyles]} />
      </GestureDetector>
      <Button mt={10} onPress={()=>updateAnimated()}>Click Me</Button>
    </Center>
  )
}

const styles=StyleSheet.create({
  box:{
    marginTop:10,
    width:100,
    height:100,
    borderRadius:10,
    backgroundColor:'#0011ff',
    justifyContent:'center',
    alignItems:'center'
  },
  ball: {
    marginTop:10,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
})
