import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// https://github.com/mmazzarolo/react-native-modal-datetime-picker
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function DatePicker({ startOrEnd }) {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [displayDate, setDisplayDate] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn('A date has been picked: ', date);
    setDisplayDate(date);
    hideDatePicker();
  };

  return (
    <View
      style={{
        flex: 1,
        // width: '50%',
        backgroundColor: 'white',
        height: 50,
        padding: 16,
        borderTopLeftRadius: startOrEnd === 'start' ? 8 : 0,
        borderBottomLeftRadius: startOrEnd === 'start' ? 8 : 0,
        borderTopRightRadius: startOrEnd === 'start' ? 0 : 8,
        borderBottomRightRadius: startOrEnd === 'start' ? 0 : 8,
        borderRightWidth: startOrEnd === 'start' ? 1 : 0,
      }}
    >
      <Pressable
        onPress={showDatePicker}
      >
        <Text>
          {
            displayDate ?
              displayDate.toDateString()
            :
              startOrEnd === 'start' ? 'Select Start Date' : 'Select End Date'
          }
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        display='inline'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});
