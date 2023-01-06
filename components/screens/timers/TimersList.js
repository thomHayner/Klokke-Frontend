import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTimersListState } from '../../../timers_recoil_state';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Timer from './Timer';
import EditTimerModal from './EditTimerModal';

import { addNewTimer } from '../../../utilities/timersFunctions';
import TimerCreator from './TimerCreator';

export default function TimersList() {
  const timers = useRecoilValue(filteredTimersListState);
  const [serverTimestamp, setServerTimestamp] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false)
  const [serverStatus, setServerStatus] = React.useState(false);
  const [listSort, setListSort] = React.useState(false);
  const [tagsSort, setTagSort] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
      scrollHandler={handleScrollToEnd}
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
      <Pressable onPress={() => toggleModal()} style={styles.container}>
        <MaterialIcons name='add-circle-outline' size={24} color='black' />
        <Text>Add Timer</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{width: '100%'}}>
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
      <EditTimerModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        scrollHandler={handleScrollToEnd}
      />
    </View>
    
  )
};

//// [STYLES] ////
const styles=StyleSheet.create({
  flatlist: {
    paddingHorizontal: 16,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
