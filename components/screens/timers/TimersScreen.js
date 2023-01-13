import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListSelect from './DropdownListsSelect';
import TimersList from './TimersList';
import TagsMultiSelect from './DropdownTagsMultiSelect';

const Stack = createStackNavigator();

export default function TimersScreen() {
  //// [COMPONENT] ////
  return (
  <View style={styles.safeAreaContainer}>
    <LinearGradient
      colors={['rgba(36, 157, 255, 1)', 'transparent']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }}
    />
    <View style={styles.dropdownsContainer}>
      <ListSelect mode={'select'} />
      <View style={styles.dropdownsSpacer} />
      <TagsMultiSelect mode={'select'} />
    </View>
    <View style={styles.dropdownsSpacer} />
    <TimersList />
  </View>
  )
};

//// [STYLES] ////
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
  },
  dropdownsContainer: {
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  dropdownsSpacer: {
    paddingTop: 4,
  },
});
