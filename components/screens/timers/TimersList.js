import * as React from 'react';
import { FlatList, Pressable, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Timer from './Timer';
import { addNewTimer } from '../../../utilities/timersFunctions';

//// TO BE DELETED [START] ////
import { DUMMY_TIMERS, DUMMY_LISTS, DUMMY_TAGS } from '../../../utilities/DUMMY_DATA';
//// TO BE DELETED [END] ////

export default function TimersList() {
  const [timers, setTimers] = React.useState([]);
  const [serverTimestamp, setServerTimestamp] = React.useState(0);
  const [listSort, setListSort] = React.useState(false);
  const [tagsSort, setTagSort] = React.useState(false);

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

  //// [FILTER TIMERS] ////
  //// [FILTER TIMERS BY SELECTED LIST] ////
  const timersListSort = (displayTimers) => {
    if (listSort !== false) {
      return displayTimers.filter((timer) => timer.list === listSort)
    };

    return displayTimers
  };

  //// [FILTER TIMERS BY SELECTED TAGS] ////
  const timersTagSort = (displayTimers) => {
    if (tagsSort !== false) {
      //double check this, needs work
      return displayTimers.filter((timer) => timer.tags.includes(tagsSort.some))
    };

    return displayTimers
  };

  //// [FILTER TIMERS FOR DISPLAY BY LIST AND TAGS] ////
  const timersDisplaySort = (timers) => {
    let displayTimers = [...timers];

    if (listSort !== false) {
      displayTimers = timersListSort(displayTimers);
    };

    if (tagsSort !== false) {
      displayTimers = timersTagSort(displayTimers);
    };

    return displayTimers
  };
  
  //// [FLATLIST SCROLL] ////
  const timerListRef = React.useRef(null);

  const handleScrollToEnd = () => {
    if (timerListRef.current) {
      timerListRef.current.scrollToEnd();
    }
  };

  //// [COMPONENTS] ////
  const ListItem = ({ item }) => (
    <Timer
      timer={item}
      timers={timers}
      setTimers={setTimers}
      serverTimestamp={serverTimestamp} />
  );

  const ListFooterComponent = (addNewTimer) => (
    <View style={styles.footer}>
      <Pressable onPress={() => addNewTimer(timers, setTimers)}>
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

//// [STYLES] ////
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
