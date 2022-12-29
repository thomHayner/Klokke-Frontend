import { Modal, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

export default function ListSelect({
  LISTS,
  modalVisible,
  setModalVisible,
  selectedList,
  setSelectedList
}) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <MaterialIcons name="close" size={24} color="black" />
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
