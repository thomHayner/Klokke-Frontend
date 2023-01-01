import { Modal, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import ListInput from './ListInput';

export default function ListsPicker({
  LISTS,
  modalVisible,
  selectedList,
  setSelectedList,
  toggleVisible,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={toggleVisible}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.row}>
          <ListInput />
          {/* <View style={styles.closeButton}> */}
            <Pressable onPress={toggleVisible}>
              <MaterialIcons name="close" size={24} color="black" />
            </Pressable>
          {/* </View> */}
        </View>
        
        <Picker
          selectedValue={selectedList}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedList(itemValue)
          }
          // mode='dropdown'
          numberOfLines={3}
          prompt='Select a List'
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'red',
            // borderRadius: 5,
            // alignSelf: 'top',
          }}
        >
          <ListInput />
          {LISTS.map((item)=> <Picker.Item label={item.label} value={item.value} key={item.label.toString()} />)}
        </Picker>
      </SafeAreaView>
    </Modal>
  )
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '80%',
  },
  closeButton: {
    // alignSelf: 'end',
    height: 40,
  },
});
