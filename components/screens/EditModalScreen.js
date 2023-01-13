import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { timersListState } from '../../timers_recoil_state';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ListSelect from './timers/DropdownListsSelect';
import TagsMultiSelect from './timers/DropdownTagsMultiSelect';

export default function EditModal({
  route,
  // scrollHandler,
}) {
  const navigation = useNavigation();
  const { indexParam, modeParam } = route.params;
  const index = Number(indexParam);
  const [timersList, setTimersList] = useRecoilState(timersListState);
  const [nameValue, setNameValue] = React.useState(timersList[index].name);
  const [listValue, setListValue] = React.useState(timersList[index].list);
  const [tagsValue, setTagsValue] = React.useState(timersList[index].tags);
  const [descriptionValue, setDescriptionValue] = React.useState(
    timersList[index].description
  );
  const [startValue, setStartValue] = React.useState(timersList[index].start);
  const [stopValue, setStopValue] = React.useState(timersList[index].stop);

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

  //// [SUBMIT THE NEW OR EDITED TIMER] ////
  const submitTimer = () => {
    if (modeParam === 'add') {
      const newIndex = timersList.length;
      setTimersList((oldTimersList) => [
        ...oldTimersList,
        {
          ...newTimer,
          id: newIndex,
        }
      ])
    };
    if (modeParam === 'edit') {
      setTimersList((oldTimersList) => [
        ...oldTimersList.slice(0, index),
        {
          ...newTimer,
          id: index,
        },
        ...oldTimersList.slice(index + 1)
      ])
    };
    setNameValue('');
    setListValue('');
    setTagsValue([]);
    setDescriptionValue('');
    setStartValue(0);
    setStopValue(0);
    // setTimeout(()=> timerListRef.current.scrollToEnd(), 100);
    navigation.navigate('TimersScreen');
  };

  //// [SCREEN COMPONENT] ////
  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <Text style={styles.textLabel}>Name</Text>
        <TextInput
          style={styles.nameInput}
          value={nameValue}
          onChangeText={(name) => {setNameValue(name)}}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.textLabel}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          value={descriptionValue}
          onChangeText={(description) => {setDescriptionValue(description)}}
        />
      </View>

      <View style={styles.container}>
        <Text  style={styles.textLabel}>List</Text>
        <ListSelect
          mode={modeParam}
          listValue={listValue}
          setEditValue={setListValue}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.textLabel}>Tags</Text>
        <TagsMultiSelect
          mode={modeParam}
          tagsValue={tagsValue}
          setEditValue={setTagsValue}
        />
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
          onPress={() => navigation.navigate('TimersScreen')}
        >
          <Text style={styles.buttonLabel}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  )
};

//// [STYLES] ////
const styles = StyleSheet.create({
  wrapperContainer: {
    paddingHorizontal: 32,
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
  descriptionInput: {
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
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 12,
  },
  tag: {
    flexDirection: 'row',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagName: {
    fontSize: 20,
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
