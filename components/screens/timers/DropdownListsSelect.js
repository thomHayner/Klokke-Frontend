//// [IMPORTS] ////
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { listsListState } from '../../../recoil_store_state';
import { timersListedFilterState } from '../../../recoil_timers_filter_state';
import { View, StyleSheet, Text, Pressable } from 'react-native';
// https://www.npmjs.com/package/react-native-element-dropdown
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListSelect({
  mode,
  listValue = '',
  setEditValue = () => {},
}) {
  //// [STATE] ////
  const [lists, setLists] = useRecoilState(listsListState);
  const [filterListValue, setFilterListValue] = useRecoilState(timersListedFilterState);
  const [timerSelectedList, setTimerSelectedList] = React.useState(listValue);
  const [onChangeInputValue, setOnChangeInputValue] = React.useState('');

  //// [INVOKE setListValue IN <EditModalScreen />] ////
  React.useEffect(() => {
    setEditValue(timerSelectedList);
  }, [timerSelectedList]);

  //// [ADD A NEW LIST GLOBALLY] ////
  const addList = () => {
    const newList = {
      label: onChangeInputValue,
      value: onChangeInputValue,
    };
    setLists((oldListsList) => [
      ...oldListsList,
      newList,
    ]);
    if (mode === 'select') {
      setFilterListValue(newList.value);
    };
    setOnChangeInputValue('');
  };

  //// [COMPONENTS] ////
  const ListEmptyComponent = () => {
    return (
      lists.length > 0 ?
        <Pressable style={styles.emptyContainer} onPress={addList}>
          <MaterialIcons name='playlist-add' size={24} color='black' />
          <Text>Create A New List</Text>
        </Pressable>
      :
        <View style={styles.emptyContainer}>
          <Text>No Lists Found!</Text>
        </View>
    )
  };

  return (
    <View style={styles.dropdownWrapper}>
      {mode === 'edit' || mode === 'add' ?
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.containerStyle}
          data={lists}
          value={timerSelectedList}
          labelField='label'
          valueField='value'
          placeholder='All Timers'
          search
          searchPlaceholder='Search Lists Or Create New List'
          onChange={(list) => setTimerSelectedList(list.value)}
          onChangeText={(search) => setOnChangeInputValue(search)}
          flatListProps={{
            ListEmptyComponent: <ListEmptyComponent />,
          }}
        />
      :
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.containerStyle}
          data={lists}
          value={filterListValue}
          labelField='label'
          valueField='value'
          placeholder='All Timers'
          search
          searchPlaceholder='Search Lists Or Create New List'
          onChange={(list) => setFilterListValue(list.value)}
          onChangeText={(search) => setOnChangeInputValue(search)}
          flatListProps={{
            ListEmptyComponent: <ListEmptyComponent />,
          }}
        />
      }
    </View>
  )
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    width: '100%',
  },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  emptyContainer: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
  },
  containerStyle: {
    borderRadius: 8,
  },
});
