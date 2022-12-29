import * as React from 'react';
import { Text, StyleSheet, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import ListSelect from './ListSelect';
import MenuIcon from './MenuIcon';

const LISTS = [
  {
    label: 'first',
    value: 'first',
  },
  {
    label: 'second',
    value: 'second',
  },
  {
    label: 'third',
    value: 'third',
  },
  {
    label: 'fourth',
    value: 'fourth',
  },
];

export default function TimersScreen() {
  const [selectedList, setSelectedList] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
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
      
      <MenuIcon />
      <Text>Timers!</Text>
      <ListSelect
        LISTS={LISTS}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
