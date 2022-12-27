import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { LogoTitle, TimersScreen, ReportsScreen, SettingsScreen } from '../screens/screensModule';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => <LogoTitle />,
        headerTitle: () => {},
        headerStyle: {
          backgroundColor: '#FF8624',
        }
      }}
    >
      <Tab.Screen
        name="Timers"
        component={TimersScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="timer" size={24} color="black" />,
          tabBarBadge: null, // number, not a function, just the number returned, use React.context
        }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="insert-chart-outlined" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="settings" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  );
};
