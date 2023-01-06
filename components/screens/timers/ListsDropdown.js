import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useRecoilState } from 'recoil';
import { listedFilterState, listsListState } from '../../../timers_recoil_state';
// https://www.npmjs.com/package/react-native-element-dropdown
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListsDropdown() {
  const [lists, setLists] = useRecoilState(listsListState);
  const [selectedList, setSelectedList] = useRecoilState(listedFilterState);
  const [onChangeInputValue, setOnChangeInputValue] = React.useState('false');

  //// [HANDLE SELECTING A NEW LIST] ////
  const handleListSelect = (list) => {
    setSelectedList(list.value);
  };

  //// [ADD A NEW LIST] ////
  const addList = () => {
    const newList = {
      label: onChangeInputValue,
      value: onChangeInputValue,
    }
    setLists((oldListsList) => [
      ...oldListsList,
      newList
    ]);
    handleListSelect(newList);
    setOnChangeInputValue('');
  };

  //// [FETCH DATA] ////
  // React.useEffect(() => {
  //   setLists(DUMMY_LISTS)
  // }, []);

  //// [COMPONENT TO RENDER IF LISTS IS EMPTY] ////
  const RenderEmpty = () => {
    return (
      lists.length > 0 ?
        <Pressable style={styles.emptyContainer} onPress={addList}>
          <MaterialIcons name="playlist-add" size={24} color="black" />
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
      <Dropdown
        style={styles.dropdownComponent}
        containerStyle={styles.dropdownContainer}
        data={lists}
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
        }}
        labelField='label'
        onChange={(list) => handleListSelect(list)}
        onChangeText={(search) => setOnChangeInputValue(search)}
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
  },
  dropdownComponent: {
    backgroundColor: '#DDDDDD',
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
