import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CallsScreen, HomeScreen, StatusScreen} from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  StatusScreen: undefined;
  CallsScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="StatusScreen" component={StatusScreen} />
      <Tab.Screen name="CallsScreen" component={CallsScreen} />
    </Tab.Navigator>
  );
}
