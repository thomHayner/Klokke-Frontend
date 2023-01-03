import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import {
  TimersScreen,
  ReportsScreen,
  SettingsScreen
} from '../screens/screensModule';

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconPadding}>
        <MaterialIcons name='av-timer' size={30} color='black' />
      </View>
      <Text style={styles.text}>Klokke</Text>
    </View>
  )
};

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
        name='Timers'
        component={TimersScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name='timer'
              size={24}
              color='black'
            />
          ),
          tabBarBadge: null, // number, not a function, just the number returned, use React.context
        }}
      />
      <Tab.Screen
        name='Reports'
        component={ReportsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name='insert-chart-outlined'
              size={24}
              color='black'
            />
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name='settings'
              size={24}
              color='black'
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  iconPadding: {
    paddingTop: 2,
  },
  text: {
    fontFamily: 'Orbitron_900Black',
    fontSize: 30,
    marginLeft: 10,
  }
});
