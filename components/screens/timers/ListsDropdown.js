import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// https://github.com/react-native-picker/picker
import { Dropdown } from 'react-native-element-dropdown';
import {
  addNewList,
} from '../../../utilities/listsFunctions';

//// TO BE DELETED [START] ////
import { DUMMY_TIMERS, DUMMY_LISTS, DUMMY_TAGS } from '../../../utilities/DUMMY_DATA';
//// TO BE DELETED [END] ////

export default function ListsDropdown() {
  const [lists, setLists] = React.useState([])
  const [selectedList, setSelectedList] = React.useState(false);

  //// [HANDLE SELECTING A NEW LIST] ////
  const handleListSelect = (list) => {
    setSelectedList(list);
  };

  //// [FETCH DATA] ////
  React.useEffect(() => {
    setLists(DUMMY_LISTS)
  }, []);

  //// [COMPONENT TO RENDER IF LISTS IS EMPTY] ////
  const RenderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Lists Found!</Text>
      </View>
    )
  };

  return (
    <View style={styles.dropdownWrapper}>
      <Dropdown
        style={styles.dropdownComponent}
        containerStyle={styles.dropdownContainer}
        data={lists}
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
          // refreshControl: <RefreshControl refreshing={false} onRefresh={onRefresh} />,
          // onEndReachedThreshold: 0.5,
        }}
        labelField='label'
        onChange={(list) => handleListSelect(list)}
        placeholder='All Timers'
        search
        searchPlaceholder='Search Lists'
        value={selectedList}
        valueField='value'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    // justifyContent: 'start',
  },
  dropdownComponent: {
    backgroundColor: '#DDDDDD',
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
  },
  dropdownContainer: {
    borderRadius: 8,
    marginTop: 4,
  },
});
