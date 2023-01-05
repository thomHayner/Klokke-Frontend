import * as React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Timer from './Timer';
import { addNewTimer } from '../../../utilities/timersFunctions';

import TimerCreator from './TimerCreator';
import { useRecoilValue } from 'recoil';
import { filteredTimersListState } from '../../../timers_recoil_state';

export default function TimersList() {
  const timers = useRecoilValue(filteredTimersListState);
  const [serverStatus, setServerStatus] = React.useState(false);
  const [serverTimestamp, setServerTimestamp] = React.useState(0);
  const [listSort, setListSort] = React.useState(false);
  const [tagsSort, setTagSort] = React.useState(false);

  //// [FETCH DATA] ////
  // React.useEffect(() => {
  //   setTimers(DUMMY_TIMERS)
  // }, []);

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
    };
  }, []);

  //// [FLATLIST SCROLL] ////
  const timerListRef = React.useRef(null);

  const handleScrollToEnd = () => {
    if (timerListRef.current) {
      timerListRef.current.scrollToEnd();
    }
  };

  //// [COMPONENTS] ////
  const RenderItem = ({ item }) => (
    <Timer
      timer={item}
      serverTimestamp={serverTimestamp}
    />
  );

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Timers Found!</Text>
      </View>
    )
  };

    const ListFooterComponent = () => (
    <View style={styles.footer}>
      <TimerCreator
        scrollHandler={handleScrollToEnd}
      />
    </View>
  );

  return (
    <FlatList
      ref={timerListRef}
      data={timers}
      keyExtractor={(item, index) => index + '' + item.id}
      style={styles.flatlist}
      showsVerticalScrollIndicator={false}
      // initialNumToRender={timers.length}
      renderItem={RenderItem}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={ListFooterComponent()}
      // onContentSizeChange={handleScrollToEnd}
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})
