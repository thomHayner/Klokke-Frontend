import * as React from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Timer from './Timer';

//// TO BE DELETED [START] ////
const DUMMY_TIMERS = [
  {
    id: 0,
    name: 'timer_0',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 1,
    name: 'timer_1',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 2,
    name: 'timer_2',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 3,
    name: 'timer_3',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 4,
    name: 'timer_4',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 5,
    name: 'timer_5',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 6,
    name: 'timer_6',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },{
    id: 7,
    name: 'timer_7',
    list: '',
    isRunning: false,
    start: 0,
    stop: 0,
    elapsed: 0,
    completed: false,
  },
];
//// TO BE DELETED [END] ////

export default function TimersList() {
  const [timers, setTimers] = React.useState([]);
  const [serverTimestamp, setServerTimestamp] = React.useState(0);
  const [listSort, setListSort] = React.useState(false);
  
  //// [FLATLIST SCROLL REF] ////
  const timerListRef = React.useRef(null);

  //// [ADD NEW TIMER FUNCTION] ////
  const addNewTimer = () => {
    let tempTimers = [...timers];

    tempTimers.push({
      id: timers.length,
      name: 'timer_' + timers.length,
      list: '',
      isRunning: false,
      start: 0,
      stop: 0,
      elapsed: 0,
      completed: false,
    });

     setTimers(tempTimers);
     
  };

  //// [SORT TIMERS BY SELECTED LIST] ////
  const timersListSort = (timers) => {
    if (listSort !== false) {
      return timers.sort((timer) => timer.list === listSort)
    };

    return timers
  };

  const handleScrollToEnd = () => {
    if (timerListRef.current) {
      timerListRef.current.scrollToEnd();
    }
  };

  //// [FETCH DATA] ////
  React.useEffect(() => {
    setTimers(DUMMY_TIMERS)
  }, []);

  //// [WEBSOCKET FUNCTIONS] ////
  React.useEffect(() => {
    let ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      console.log('Connected to the server');
    };
    ws.onclose = (e) => {
      console.log('Disconnected. Check internet or server.');
    };
    ws.onerror = (e) => {
      console.log(e.message);
    };
    ws.onmessage = (e) => {
      setServerTimestamp(e.data);
      // console.log(e.data)
    };
  }, []);

  const ListItem = ({ item }) => (
    <Timer
      timer={item}
      timers={timers}
      setTimers={setTimers}
      serverTimestamp={serverTimestamp} />
  );

  const ListFooterComponent = (addNewTimer) => (
    <View style={styles.footer}>
      <Pressable onPress={addNewTimer}>
        <MaterialIcons name="add-circle-outline" size={24} color="black" />
      </Pressable>
    </View>
  );

  return (
    <FlatList
      ref={timerListRef}
      data={timersListSort(timers)}
      keyExtractor={(item, index) => index + '' + item.id}
      style={styles.flatlist}
      showsVerticalScrollIndicator={false}
      renderItem={ListItem}
      ListFooterComponent={ListFooterComponent(addNewTimer)}
      onContentSizeChange={handleScrollToEnd}
      // centerContent={true}
    />
  )
};

const styles=StyleSheet.create({
  flatlist: {
    paddingHorizontal: 16,
    width: '100%',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})
