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
  renameTimer,
  moveToNewList,
} from '../../../utilities/timersFunctions';

export default function Timer({ timer, timers, setTimers, serverTimestamp }) {
  const { HH, MM, SS } = displayProperTime(timer, serverTimestamp);

  const TimerActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Delete Timer',
          'Reset Timer',
          timer.completed ? 'Unlock Timer' : 'Mark Task Completed',
          'Rename Timer',
          'Move To List',
          'Close Menu',
        ],
        cancelButtonIndex: 5,
        destructiveButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {deleteTimer(timer, timers, setTimers)};
        if (buttonIndex === 1) {resetTimer(timer, timers, setTimers)};
        if (buttonIndex === 2) {
          handleCompleteTimer(timer, timers, setTimers)
        };
        if (buttonIndex === 3) {renameTimer};
        if (buttonIndex === 4) {moveToNewList};
      }
    )
  };

  return (
    <View style={[styles.container, styles.row, styles.timerOuterWrapper]}>
      <Pressable 
        style={[styles.container, styles.mainCompartment]}
        onPress={() => handleTimer(timer, timers, setTimers, serverTimestamp)}
      >
        <View style={styles.mainCompartmentTop}>
          <Text style={[styles.row, styles.timerName]}>
            {timer.name}
          </Text>
          <Text style={[styles.row, styles.listName]}>
            {'List: '}
            {timer.list ? timer.list : 'none'}
          </Text>
          <Text style={[styles.row, styles.listName]}>
            {'Tags: '}
            {timer.tags.length > 0 ? 
              timer.tags.map((tag, index)=> {
                index === timer.tags.length ?
                  tag
                :
                  tag + ', '
              })
            :
              'none'
            }
            
          </Text>
        </View>

        <View style={[styles.row, styles.mainCompartmentBottom]}>
          <View style={[styles.container, ]}>
            {timer.completed ? 
              <MaterialIcons
                name="lock-outline"
                size={30}
                color="#249DFF"
              />
            :
              timer.isRunning ? 
                <MaterialIcons
                  name="pause-circle-outline"
                  size={30}
                  color="#FF2824"
                />
              :
                <MaterialIcons
                  name="play-circle-outline"
                  size={30}
                  color="#389916"
                />
            }
          </View>
          <View style={styles.clockContainer}>
            <View style={styles.row}>
              <Text style={styles.clockface}>{HH}</Text>
              <Text style={styles.clockfaceDivider}>:</Text>
              <Text style={styles.clockface}>{MM}</Text>
              <Text style={styles.clockfaceDivider}>:</Text>
              <Text style={styles.clockface}>{SS}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.clockfaceLabel}>h</Text>
              <Text style={styles.clockfaceDivider}> </Text>
              <Text style={styles.clockfaceLabel}>m</Text>
              <Text style={styles.clockfaceDivider}> </Text>
              <Text style={styles.clockfaceLabel}>s</Text>
            </View>
          </View>
        </View>
      </Pressable>

        <Pressable
          style={[styles.container]}
          onPress={TimerActionSheet}>
        <View style={[styles.container, styles.menuIconContainer]}>
            <MaterialIcons name="menu" size={24} color="black" />
        </View>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  timerOuterWrapper: {
    minHeight: 100,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 2,
    backgroundColor: '#E9F5FF'
  },
  mainCompartment: {
    flex: 5,
    alignItems: 'start',
    borderRightWidth: 1,
    borderRightColor: '#dddddd',
  },
  mainCompartmentTop: {
    flex: 1,
    width: '100%',
    padding: 8,
    // borderBottomWidth: 1,
    // borderBottomColor: '#dddddd',
  },
  mainCompartmentBottom: {
    flex: 1,
    width: '100%',
    padding: 8,
  },
  timerName: {
    padding: 4,
    fontSize: 22,
    fontWeight: 'bold',
  },
  listName: {
    padding: 4,
    fontSize: 20,
    fontStyle: 'italic',
  },
  clockContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
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
  menuIconContainer: {
    padding: 8,
  },
});
