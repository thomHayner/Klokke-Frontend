//// [IMPORTS] ////
import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useRecoilState } from 'recoil';
import {
  taggedFilterState,
  tagsListState
} from '../../../timers_recoil_state';
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
  const [filterTagsList, setFilterTagsList] = useRecoilState(taggedFilterState);
  const [timerTagsList, setTimerTagsList] = React.useState(tagsValue);
  const [onChangeInputValue, setOnChangeInputValue] = React.useState('');

  //// [FETCH DATA] ////
  // React.useEffect(() => {
  //   setTagsList(DUMMY_LISTS)
  // }, []);

  //// [INVOKE setTagsValue IN <EditModalScreen />] ////
  React.useEffect(() => {
    const newTags = [...timerTagsList];
    setEditValue(newTags);
  }, [timerTagsList]);

  //// [] ////
  // React.useEffect(() => {
  //   const newTags = [...filterTagsList];
  //   setEditValue(newTags);
  // }, [filterTagsList]);

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
    setOnChangeInputValue('');
  };

  //// [COMPONENT TO RENDER IF RECOIL search OR tagsListState IS EMPTY] ////
  const RenderEmpty = () => {
    return (
      tagsList.length > 0 ?
        <Pressable style={styles.emptyContainer} onPress={addTagGlobally}>
          <MaterialIcons name="playlist-add" size={24} color="black" />
          <Text>Create A New Tag</Text>
        </Pressable>
      :
        <View style={styles.emptyContainer}>
          <Text>No Tags Found!</Text>
        </View>
    )
  };

  //// [COMPONENT TO RENDER ANY TAG LINE ITEM IN DROPDOWN] ////
  const RenderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        {/* <MaterialIcons name="tag" size={24} color="black" /> */}
      </View>
    );
  };

  //// [COMPONENT TO RENDER A SELECTED TAG LINE ITEM IN DROPDOWN] ////
  const RenderSelectedItem = (item, unSelect) => (
    <Pressable onPress={() => unSelect && unSelect(item)}>
      <View style={styles.selectedStyle}>
        <Text style={styles.textSelectedStyle}>{item.label}</Text>
        <MaterialIcons name="delete" size={24} color="black" />
        {/* <MaterialIcons name="close" size={24} color="black" /> */}
      </View>
    </Pressable>
  );

  //// [MAIN COMPONENT] ////
  return (
    <View style={styles.dropdownWrapper}>
      {mode === 'edit' || mode === 'add' ?
        <MultiSelect
          style={styles.dropdown}
          containerStyle={styles.containerStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedStyle={styles.selectedStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={tagsList}
          value={timerTagsList}
          labelField='label'
          valueField='value'
          placeholder='Tags'
          search
          searchPlaceholder='Search Tags'
          onChange={(item) => setTimerTagsList(item)}
          onChangeText={(search) => setOnChangeInputValue(search)}
          renderItem={RenderItem}
          renderSelectedItem={RenderSelectedItem}
          flatListProps={{
            ListEmptyComponent: <RenderEmpty />,
          }}
        />
      :
        <MultiSelect
          style={styles.dropdown}
          containerStyle={styles.containerStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedStyle={styles.selectedStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={tagsList}
          value={filterTagsList}
          labelField='value'
          valueField='value'
          placeholder='Tags'
          search
          searchPlaceholder='Search Tags'
          onChange={(tag) => setFilterTagsList(tag)}
          onChangeText={(search) => setOnChangeInputValue(search)}
          renderItem={RenderItem}
          renderSelectedItem={RenderSelectedItem}
          flatListProps={{
            ListEmptyComponent: <RenderEmpty />,
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
    // backgroundColor: '#DDDDDD',
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // borderRadius: 8,
    // flexWrap: 'wrap',
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
    // marginTop: 4,
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
