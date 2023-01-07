import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EditModal from './NavEditModal';
import ListsDropdown from './ListsDropdown';
import TimersList from './TimersList';

const Stack = createStackNavigator();

export default function TimersScreen() {

    return (
    <View style={styles.safeAreaContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(36, 157, 255, 1)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <View style={styles.listsDropdownWrapper}>
        <ListsDropdown/>
      </View>
      <TimersList mode={'selectList'} />
    </View>
    )
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
  },
  listsDropdownWrapper: {
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
});
