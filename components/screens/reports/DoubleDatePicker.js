import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// https://github.com/mmazzarolo/react-native-modal-datetime-picker
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function DoubleDatePicker() {
  const [isStartPickVisible, setStartPickerVisibility] = React.useState(false);
  const [displayStartDate, setDisplayStartDate] = React.useState(false);
  const [isEndPickVisible, setEndPickerVisibility] = React.useState(false);
  const [displayEndDate, setDisplayEndDate] = React.useState(false);

  const showStartDatePicker = () => {
    setStartPickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartPickerVisibility(false);
  };

  const handleStartConfirm = (date) => {
    if (displayEndDate) {
      if (new Date(date) > new Date(displayEndDate)) {
        setDisplayEndDate(false)
      }
    };
    setDisplayStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndPickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndPickerVisibility(false);
  };

  const handleEndConfirm = (date) => {
    if (displayStartDate) {
      if (new Date(date) < new Date(displayStartDate)) {
        setDisplayStartDate(false)
      }
    };
    setDisplayEndDate(date);
    hideEndDatePicker();
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={showStartDatePicker}
        style={[styles.picker, styles.startBorder]}  
      >
        <Text>
          {
            displayStartDate ?
              displayStartDate.toDateString()
            :
              'Select Start Date'
          }
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isStartPickVisible}
        mode='date'
        display='inline'
        onConfirm={handleStartConfirm}
        onCancel={hideStartDatePicker}
      />

      <Pressable
        onPress={showEndDatePicker}
        style={[styles.picker, styles.endBorder]}  
      >
        <Text>
          {
            displayEndDate ?
              displayEndDate.toDateString()
            :
              'Select End Date'
          }
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isEndPickVisible}
        mode='date'
        display='inline'
        onConfirm={handleEndConfirm}
        onCancel={hideEndDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row'
  },
  picker: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  startBorder: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  endBorder: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
