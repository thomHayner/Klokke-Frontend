//// [IMPORTS] ////
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { listsListState } from '../../../recoil_store_state';
import { timersListedFilterState } from '../../../recoil_timers_filter_state';
import { reportListedFilterState } from '../../../recoil_report_filter_state';
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
  const [filterTimerListValue, setFilterTimerListValue] = useRecoilState(
    timersListedFilterState
  );
  const [filterReportListValue, setFilterReportListValue] = useRecoilState(
    reportListedFilterState
  );
  const [timerSelectedList, setTimerSelectedList] = React.useState(listValue);
  const [onChangeInputValue, setOnChangeInputValue] = React.useState('');

  //// [INVOKE setListValue IN <EditModalScreen />] ////
  React.useEffect(() => {
    setEditValue(timerSelectedList);
  }, [timerSelectedList]);

  //// [HANDLE THE VALUE DISPLAYED WHEN COMPONENT IS COLLAPSED] ////
  const handleValue = () => {
    switch(mode) {
      case 'filterTimers':
        return filterTimerListValue
      case 'filterReports':
        return filterReportListValue
      default:
        return timerSelectedList
    }
  };
  
  //// [HANDLE SELECTING A LIST] ////
  const handleOnChange = (list) => {
    switch(mode) {
      case 'filterTimers':
        return setFilterTimerListValue(list.value)
      case 'filterReports':
        return setFilterReportListValue(list.value)
      default:
        return setTimerSelectedList(list.value)
    }
  };

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
    if (mode === 'filterTimers') {
      setFilterTimerListValue(newList.value);
    };
    setOnChangeInputValue('');
  };

  //// [COMPONENTS] ////
  const ListEmptyComponent = () => {
    return (
      mode === 'filterReports' ?
        <View style={styles.emptyContainer}>
          <Text>No Lists Found!</Text>
        </View>
      :
        <Pressable style={styles.emptyContainer} onPress={addList}>
          <MaterialIcons name='playlist-add' size={24} color='black' />
          <Text>Create A New List</Text>
        </Pressable>
    )
  };

  return (
    <View style={styles.dropdownWrapper}>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        data={lists}
        value={handleValue()}
        labelField='label'
        valueField='value'
        placeholder='All Timers'
        search
        searchPlaceholder='Search Lists Or Create New List'
        onChange={(list) => handleOnChange(list)}
        onChangeText={(search) => setOnChangeInputValue(search)}
        flatListProps={{
          ListEmptyComponent: <ListEmptyComponent />,
        }}
      />
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
