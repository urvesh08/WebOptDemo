import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../modules/home/Home';
import {Routes} from '../constants';

export type RootStackParamList = {
  [Routes.home]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        animation: 'fade',
      }}>
      <RootStack.Screen name={Routes.home} component={Home} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
