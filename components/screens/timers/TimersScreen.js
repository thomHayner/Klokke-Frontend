import * as React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListsDropdown from './ListsDropdown';

export default function TimersScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleVisible = () => {
    setModalVisible(!modalVisible);
  };

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
      <ListsDropdown />
      <Text>Timers!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
  },
});
