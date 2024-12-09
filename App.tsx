import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { RNView } from './src/components/atoms';
import { SafeAreaView } from 'react-native-safe-area-context';

 const App = () => {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
