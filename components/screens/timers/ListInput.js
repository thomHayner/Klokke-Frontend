import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function ListInput() {
  const [listValue, setListValue] = React.useState('All');
  const handleValueChange = (text) => {setListValue(text)};

  return (
    <View style={styles.listInputWrapper}>
      <TextInput
          style={styles.input}
          value={listValue}
          editable
          keyboardType='default'
          onChangeText={handleValueChange}
        />
    </View>
  )
};

const styles=StyleSheet.create({
  listInputWrapper: {
    // height: 40,
  },
  
  input: {
    // height: 40,
    // width: '100%',
  },
});
