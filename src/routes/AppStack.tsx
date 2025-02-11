import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'screens/auth/app/HomeScreen/HomeScree';

export type ApptackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<ApptackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
