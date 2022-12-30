import { Modal, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

export default function ListSelect({
  LISTS,
  modalVisible,
  selectedList,
  setSelectedList,
  toggleVisible,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleVisible}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <Pressable onPress={toggleVisible}>
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
        {/* <TextInput
          style={{ width: '100%' }}
          value='uhuhuhtrctfcc'
          onChangeText={()=>{}}
        /> */}
        <Picker
          selectedValue={selectedList}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedList(itemValue)
          }
          // mode='dropdown'
          // prompt
          style={{
            width: '100%',
            // height: 56,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 5,
            alignSelf: 'top',
          }}
        >
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
  closeButton: {
    alignSelf: 'end',
  },
});
