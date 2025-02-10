import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsView from '../views/SettingsView';
import HomeView from '../views/HomeView';
import ScoreView from '../views/ScoreView';
import {HomeIcon, StarIcon, SettingsIcon} from '../components/icons';

const Tab = createBottomTabNavigator();

function RouteNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomePage">
        <Tab.Screen name="HomePage" component={HomeView} 
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon stroke={"gray"} size={size} />
            )}}
        />
        <Tab.Screen name="Score" component={ScoreView} 
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <StarIcon stroke={"gray"} size={size} />
            )}}
        />
        <Tab.Screen name="Settings" component={SettingsView} 
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <SettingsIcon stroke={"gray"} size={size} />
            )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;