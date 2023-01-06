import * as React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListsDropdown from './ListsDropdown';
import TimersList from './TimersList';

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
      <TimersList />
    </View>
  );
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
