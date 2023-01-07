import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { timersListState } from '../../../timers_recoil_state';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActionSheetIOS,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  displayProperTime,
  renameTimer,
  editDescription,
  moveToNewList,
  organizeIndividualList,
  editTimerTags,
  handleTimer,
  resetTimer,
  handleComplete,
  deleteTimer,
} from '../../../utilities/timersFunctions';

export default function Timer({ timer, serverTimestamp, scrollHandler }) {
  const navigation = useNavigation();
  const [timersList, setTimersList] = useRecoilState(timersListState);
  const { HH, MM, SS } = displayProperTime(timer, serverTimestamp);
  const index = timersList.findIndex((item) => item === timer);

  const TimerActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Delete Timer',
          'Reset Timer',
          timer.isCompleted ? 'Unlock Timer' : 'Mark Task Completed',
          'Edit Timer',
          'Close Menu',
        ],
        cancelButtonIndex: 4,
        destructiveButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {deleteTimer(index, timersList, setTimersList)};
        if (buttonIndex === 1) {resetTimer(index, timersList, setTimersList)};
        if (buttonIndex === 2) {
          handleComplete(index, timersList, setTimersList);
        };
        if (buttonIndex === 3) {
          timer.isRunning ?
            stopTimerAlert()
          :
            navigation.navigate('TimersEditModal')
        };
      }
    )
  };

  const stopTimerAlert = () =>
    Alert.alert(
      "Alert Title",
      "The timer needs to be stopped before editing!",
      [
        {
          text: "Stop Timer",
          onPress: () => {
            handleTimer(index, timersList, setTimersList, serverTimestamp)
            toggleModal();
          },
        },
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        }
      ]
    );

  return (
    <View style={[styles.container, styles.row, styles.timerOuterWrapper]}>
      <Pressable 
        style={[styles.container, styles.mainCompartment]}
        onPress={() => {
          handleTimer(index, timersList, setTimersList, serverTimestamp)
        }}
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
            {timer.isCompleted ? 
              <MaterialIcons
                name='lock-outline'
                size={30}
                color='#249DFF'
              />
            :
              timer.isRunning ? 
                <MaterialIcons
                  name='pause-circle-outline'
                  size={30}
                  color='#FF2824'
                />
              :
                <MaterialIcons
                  name='play-circle-outline'
                  size={30}
                  color='#389916'
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
            <MaterialIcons name='menu' size={24} color='black' />
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
