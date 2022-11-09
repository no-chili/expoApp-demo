import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import Navigator from './src'
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
    
  );
}
