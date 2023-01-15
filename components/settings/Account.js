import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountSettings() {
  const [usernameValue, setUsernameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.circle}>
        <Text>Avatar</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={setUsernameValue}
        value={usernameValue}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={setEmailValue}
        value={emailValue}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPasswordValue}
        value={passwordValue}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  circle: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    marginVertical: 8,
  },
  avatar: {},
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginHorizontal: 'auto',
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
