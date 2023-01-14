//// [IMPORTS] ////
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { tagsListState } from '../../../recoil_store_state';
import { timersTaggedFilterState } from '../../../recoil_timers_filter_state';
import { reportTaggedFilterState } from '../../../recoil_report_filter_state';
import { View, StyleSheet, Text, Pressable } from 'react-native';
// https://www.npmjs.com/package/react-native-element-dropdown
import { MultiSelect } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

export default function TagsMultiSelect({
  mode,
  tagsValue = [],
  setEditValue = () => {},
}) {
  //// [STATE] ////
  const [tagsList, setTagsList] = useRecoilState(tagsListState);
  const [filterTimerTagsValue, setFilterTimerTagsValue] = useRecoilState(
    timersTaggedFilterState
  );
  const [filterReportTagsValue, setFilterReportTagsValue] = useRecoilState(
    reportTaggedFilterState
  );
  const [timerTagsValue, setTimerTagsValue] = React.useState(tagsValue);
  const [onChangeInputValue, setOnChangeInputValue] = React.useState('');

  //// [INVOKE setTagsValue IN <EditModalScreen />] ////
  React.useEffect(() => {
    setEditValue(timerTagsValue);
  }, [timerTagsValue]);

  //// [HANDLE THE VALUE DISPLAYED WHEN COMPONENT IS COLLAPSED] ////
  const handleValue = () => {
    switch(mode) {
      case 'filterTimers':
        return filterTimerTagsValue
      case 'filterReports':
        return filterReportTagsValue
      default:
        return timerTagsValue
    }
  };
  
  //// [HANDLE SELECTING A TAG] ////
  const handleOnChange = (tag) => {
    switch(mode) {
      case 'filterTimers':
        return setFilterTimerTagsValue(tag)
      case 'filterReports':
        return setFilterReportTagsValue(tag)
      default:
        return setTimerTagsValue(tag)
    }
  };

  //// [ADD A NEW TAG GLOBALLY] ////
  const addTagGlobally = () => {
    const newTag = {
      label: onChangeInputValue,
      value: onChangeInputValue,
    };
    setTagsList((oldTagsList) => [
      ...oldTagsList,
      newTag,
    ]);
    if (mode === 'filterTimers') {
      const newFilterValue = [...filterTimerTagsValue];
      newFilterValue.push(onChangeInputValue)
      setFilterTimerTagsValue(newFilterValue);
    };
    setOnChangeInputValue('');
  };

  //// [COMPONENT TO RENDER IF RECOIL search OR tagsListState IS EMPTY] ////
  const RenderEmpty = () => {
    return (
      mode === 'filterReports' ?
        <View style={styles.emptyContainer}>
          <Text>No Tags Found!</Text>
        </View>
      :
        <Pressable style={styles.emptyContainer} onPress={addTagGlobally}>
          <MaterialIcons name='playlist-add' size={24} color='black' />
          <Text>Create A New Tag</Text>
        </Pressable>
    )
  };

  //// [COMPONENT TO RENDER ANY TAG LINE ITEM IN DROPDOWN] ////
  const RenderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  //// [COMPONENT TO RENDER A SELECTED TAG LINE ITEM IN DROPDOWN] ////
  const RenderSelectedItem = (item, unSelect) => (
    <Pressable onPress={() => unSelect && unSelect(item)}>
      <View style={styles.selectedStyle}>
        <Text style={styles.textSelectedStyle}>{item.label}</Text>
        <MaterialIcons name='delete' size={24} color='black' />
        {/* <MaterialIcons name='close' size={24} color='black' /> */}
      </View>
    </Pressable>
  );

  //// [MAIN COMPONENT] ////
  return (
    <View style={styles.dropdownWrapper}>
      <MultiSelect
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedStyle={styles.selectedStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={tagsList}
        value={handleValue()}
        labelField='label'
        valueField='value'
        placeholder='Tags'
        search
        searchPlaceholder='Search Tags Or Create New Tag'
        onChange={(tag) => handleOnChange(tag)}
        onChangeText={(search) => setOnChangeInputValue(search)}
        renderItem={RenderItem}
        renderSelectedItem={RenderSelectedItem}
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 12,
  },
  tag: {
    flexDirection: 'row',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagName: {
    fontSize: 20,
  },
});
