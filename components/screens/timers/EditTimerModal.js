import * as React from 'react';
import { useRecoilState } from 'recoil';
import { timersListState } from '../../../timers_recoil_state';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import ListsDropdown from './ListsDropdown';
import TagsMultiSelect from './TagsMultiSelect';

const defaultTimer = {
  name: '',
  description: '',
  list: '',
  listPosition: false,
  tags: [],
  isRunning: false,
  start: 0,
  stop: 0,
  elapsed: 0,
  completed: false,
};

export default function EditTimerModal({
  modalVisible,
  toggleModal,
  timer = defaultTimer,
  scrollHandler,
  mode,
}) {
  const insets = useSafeAreaInsets();
  const [timers, setTimers] = useRecoilState(timersListState);
  const [nameValue, setNameValue] = React.useState(timer.name);
  const [listValue, setListValue] = React.useState(timer.list);
  const [tagsValue, setTagsValue] = React.useState(timer.tags);
  const [descriptionValue, setDescriptionValue] = React.useState(
    timer.description
  );
  const [startValue, setStartValue] = React.useState(timer.start);
  const [stopValue, setStopValue] = React.useState(timer.stop);
  
  const newTimer = {
    name: nameValue,
    description: descriptionValue,
    list: listValue,
    listPosition: false,
    tags: tagsValue,
    isRunning: false,
    start: startValue,
    stop: stopValue,
    elapsed: 0, // will need to be calculated - for intervals
    completed: false,
  };

  const submitTimer = () => {
    if (mode === 'add') {
      const index = timers.length;
      setTimers((oldTimersList) => [
        ...oldTimersList,
        {
          ...newTimer,
          id: index,
        }
      ])
    };
    if (mode === 'edit') {
      const index = timers.findIndex(item => item.id === timer.id);
      setTimers((oldTimersList) => [
        ...oldTimersList.slice(0, index),
        {
          ...newTimer,
          id: index,
        },
        ...oldTimersList.slice(index + 1)
      ]);
    }
    setNameValue('');
    setListValue('');
    setTagsValue('');
    setDescriptionValue('');
    setStartValue(0);
    setStopValue(0);
    setTimeout(()=> scrollHandler(), 100);
    toggleModal();;
  };

  // const onChangeName = (name) => {
  //   setNameValue(name);
  // };

  return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeContainer}>
            
            <Pressable
              style={[
                  styles.closeButton,
                  { top: insets.top + 10, right: insets.right + 15 }
              ]}
              onPress={toggleModal}
            >
              <MaterialIcons name='close' size={36} color='black' />
            </Pressable>

            <View style={styles.container}>
              <Text style={styles.textLabel}>Name</Text>
              <TextInput
                style={styles.nameInput}
                value={nameValue}
                onChangeText={(name) => {setNameValue(name)}}
              />
            </View>

            <View style={styles.container}>
              <Text  style={styles.textLabel}>List</Text>
              <ListsDropdown
                mode={'editTimer'}
                setEditValue={setListValue}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.textLabel}>Tags</Text>
              <TagsMultiSelect />
            </View>

            <View style={styles.container}>
              <Text style={styles.textLabel}>Intervals</Text>
              {/* timer.start.map((n,i,a) => {}) */}
              {/* map timer intervals, each interval needs to be editable */}
              <View style={styles.row}>
                <Text style={[styles.intervalLabel, { marginRight: 4 }]}>
                  Start
                </Text>
                <Text style={[styles.intervalLabel, { marginLeft: 4 }]}>
                  Stop
                </Text>
              </View>
              <View style={styles.row}>
                <TextInput
                  style={[styles.intervalInput, { marginRight: 4 }]}
                  value={''}
                  onChangeText={(start) => {setStartValue(start)}}
                />
                <TextInput
                  style={[styles.intervalInput, { marginLeft: 4 }]}
                  value={''}
                  onChangeText={(stop) => {setStopValue(stop)}}
                />
              </View>
            </View>

            <View style={[styles.row, { marginTop: 30, }]}>
              <Pressable
                style={[styles.buttonBorder, styles.submit]}
                onPress={submitTimer}
              >
                <Text style={styles.buttonLabel}>Submit</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonBorder, styles.cancel]}
                onPress={toggleModal}
              >
                <Text style={styles.buttonLabel}>Cancel</Text>
              </Pressable>
            </View>

          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
    )
};

const styles = StyleSheet.create({
  safeContainer: {
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 32,
  },
  closeButton: {
    position: 'absolute',
  },
  container: {
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  textLabel: {
    width: '100%',
    paddingBottom: 4,
    fontSize: 20,
  },
  nameInput: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
  intervalLabel: {
    flex: 1,
    paddingVertical: 4,
  },
  intervalInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
  submit: {
    marginRight: 16,
    marginLeft: 8,
    backgroundColor: 'green',
  },
  cancel: {
    marginRight: 8,
    marginLeft: 16,
    backgroundColor: 'red', 
  },
});
