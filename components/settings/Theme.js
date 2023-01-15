import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ThemeSettings() {
  return (
    <View style={[styles.wrapper, styles.row]}>
      <Pressable
        style={[styles.buttonBorder, styles.lightModeButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>Light</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBorder, styles.darkModeButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>Dark</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBorder, styles.systemModeButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>System</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  buttonBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
  lightModeButton: {
    marginRight: 8,
    marginLeft: 16,
  },
  darkModeButton: {
    marginHorizontal: 8,
  },
  systemModeButton: {
    marginRight: 16,
    marginLeft: 8,
  },
});
