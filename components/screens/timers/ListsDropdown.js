import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// https://github.com/react-native-picker/picker
import { Dropdown } from 'react-native-element-dropdown';

//// TO BE DELETED [START] ////
const DUMMY_LISTS = [
  {
    label: 'first',
    value: 'first',
  },
  {
    label: 'second',
    value: 'second',
  },
  {
    label: 'third',
    value: 'third',
  },
  {
    label: 'fourth',
    value: 'fourth',
  },
];
//// TO BE DELETED [END] ////

export default function ListsDropdown() {
  const [lists, setLists] = React.useState([])
  const [selectedList, setSelectedList] = React.useState();

  React.useEffect(() => {
    setLists(DUMMY_LISTS)
  }, []);

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
        onChange={(list) => setSelectedList(list)}
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
