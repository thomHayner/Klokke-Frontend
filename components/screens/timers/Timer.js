import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActionSheetIOS,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  displayProperTime,
  handleTimer,
  deleteTimer,
  resetTimer,
  handleCompleteTimer,
} from './timersFunctions';

export default function Timer({ timer, timers, setTimers, serverTimestamp }) {
  const { HH, MM, SS } = displayProperTime(timer, serverTimestamp)
  return (
    <Pressable onPress={() => handleTimer(timer, timers, setTimers, serverTimestamp)}>
      <View style={styles.timerWrapper}>
        <View style={styles.innerCompartment}>
          {timer.completed ? 
            <MaterialIcons name="lock-outline" size={35} color="black" />
          :
            <MaterialIcons name="lock-open" size={35} color="black" />
          }
        </View>

        <View style={styles.innerCompartment}>
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

        <View style={styles.innerCompartment}>
          <Text>{timer.name}</Text>
          <Text>List: {timer.list ? timer.list : 'none'}</Text>
        </View>

        <View style={styles.innerCompartment}>
          <Pressable onPress={() => {
            ActionSheetIOS.showActionSheetWithOptions(
              {
                options: [
                  'Delete Timer',
                  'Reset Timer',
                  timer.completed ? 'Unlock Timer' : 'Mark Task Completed',
                  'Rename Timer',
                  'Close Menu',
                ],
                cancelButtonIndex: 4,
                destructiveButtonIndex: 0,
              },
              buttonIndex => {
                if (buttonIndex === 0) {deleteTimer(timer, timers, setTimers)};
                if (buttonIndex === 1) {resetTimer(timer, timers, setTimers)};
                if (buttonIndex === 2) {handleCompleteTimer(timer, timers, setTimers)};
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
    minHeight: 100,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  innerCompartment: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    marginVertical: 8,
    // backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
  clockface: {
    fontSize: 24,
    minWidth: 32,
    textAlign: 'center',
    // backgroundColor: 'green',
  },
  clockfaceDivider: {
    fontSize: 20,
    textAlign: 'center',
    minWidth: 6,
    // backgroundColor: 'yellow',
  },
  clockfaceLabel: {
    fontSize: 20,
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
