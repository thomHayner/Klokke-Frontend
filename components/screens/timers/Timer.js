import * as React from 'react';
import { View, Text, StyleSheet, Pressable, ActionSheetIOS } from 'react-native';
// https://github.com/react-native-picker/picker
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import {
  displayProperTime,
  handleTimer,
  deleteTimer,
  resetTimer,
  completeTimer,
} from './timersFunctions';

export default function Timer({ timer, timers, setTimers, serverTimestamp }) {
  const { HH, MM, SS } = displayProperTime(timer, serverTimestamp)
  return (
    <Pressable onPress={() => handleTimer(timer, timers, setTimers, serverTimestamp)}>
      <View style={styles.timerWrapper}>
        <View style={styles.clockfaceContainer}>
          <View style={styles.row}>
            <Text style={styles.clockface}>{HH}</Text>
            <Text style={styles.clockfaceDivider}>:</Text>
            <Text style={styles.clockface}>{MM}</Text>
            <Text style={styles.clockfaceDivider}>:</Text>
            <Text style={styles.clockface}>{SS}</Text>
          </View>
          {/* <Text style={styles.clockface}>{displayProperTime(timer, serverTimestamp)}</Text> */}
          {/* <Text style={styles.clockHelper}>HH:MM:SS</Text> */}
          <View style={styles.row}>
            <Text style={styles.clockfaceLabel}>h</Text>
            <Text style={styles.clockfaceLabelDivider}> </Text>
            <Text style={styles.clockfaceLabel}>m</Text>
            <Text style={styles.clockfaceLabelDivider}> </Text>
            <Text style={styles.clockfaceLabel}>s</Text>
          </View>
        </View>

        <View style={styles.clockfaceContainer}>
          <Text>{timer.name}</Text>
          <Text>List: {timer.list ? timer.list : 'none'}</Text>
        </View>

        <View style={styles.clockfaceContainer}>
          <Pressable onPress={() => {
            ActionSheetIOS.showActionSheetWithOptions(
              {
                options: ['Delete Timer', 'Reset Timer', 'Mark Task Completed', 'Rename Timer', 'Close Menu'],
                cancelButtonIndex: 4,
                destructiveButtonIndex: 0,
              },
              buttonIndex => {
                if (buttonIndex === 0) {deleteTimer(timer, timers, setTimers)};
                if (buttonIndex === 1) {resetTimer(timer, timers, setTimers)};
                if (buttonIndex === 2) {completeTimer(timer, timers, setTimers)};
                if (buttonIndex === 3) {};
              }
            )
          }}>
            <MaterialIcons name="menu" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  timerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  clockfaceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    // margin: 4,
    // backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
  clockface: {
    fontSize: 19,
    minWidth: 32,
    textAlign: 'center',
    // backgroundColor: 'green',
  },
  clockfaceDivider: {
    fontSize: 19,
    textAlign: 'center',
    minWidth: 6,
    // backgroundColor: 'yellow',
  },
  clockfaceLabel: {
    fontSize: 16,
    minWidth: 32,
    textAlign: 'center',
    // backgroundColor: 'blue',
  },
  clockfaceLabelDivider: {
    fontSize: 16,
    minWidth: 6,
    textAlign: 'center',
  },
  
});
// minWidth: 100,
