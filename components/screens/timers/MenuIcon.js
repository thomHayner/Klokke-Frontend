import * as React from 'react';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MenuIcon() {
  return (
    <View style={styles.menuIconWrapper}>
        <Text>Select List</Text>
        <Pressable
        // onPress={toggleVisible}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  menuIconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 10,
  }
});
