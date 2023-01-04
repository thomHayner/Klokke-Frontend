import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSetRecoilState } from 'recoil';
import { timersListState } from '../../../timers_recoil_state';

export default function TimerCreator() {
  const [inputValue, onChangeInputValue] = React.useState('');
  const setTimers = useSetRecoilState(timersListState);

  const addTimer = () => {
    setTimers((oldTimersList) => [
      ...oldTimersList,
      {
        id: timersListState.length,
        name: inputValue,
        description: '',
        list: '',
        listPosition: false,
        tags: [],
        isRunning: false,
        start: 0,
        stop: 0,
        elapsed: 0,
        completed: false,
      }
    ]);
    onChangeInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={inputValue} onChangeText={onChangeInputValue} />
      <Pressable onPress={addTimer} style={styles.container}>
        <MaterialIcons name='add-circle-outline' size={24} color='black' />
        <Text>Add Timer</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    minWidth: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 8,
  },
})