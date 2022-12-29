import * as React from 'react';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MenuIcon() {
  return (
    <View style={styles.menuIconWrapper}>
        <Pressable
        // onPress={toggleVisible}
        >
          <Text>Select List</Text>
          <MaterialIcons name="menu" size={24} color="black" />
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  menuIconWrapper: {
    paddingRight: 10,
  }
});
