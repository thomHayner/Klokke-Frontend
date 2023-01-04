import * as React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// https://github.com/react-native-picker/picker
import { Dropdown } from 'react-native-element-dropdown';

export default function EditTimerModal({ modalVisible, toggleModal }) {
  

  return (
      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          toggleModal();
        }}
      >
        <View
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Pressable onPress={toggleModal}>
            <Text>MODALMODALMODALMODAL</Text>
          </Pressable>
        </View>
      </Modal>
    )
};

const styles = StyleSheet.create({

});