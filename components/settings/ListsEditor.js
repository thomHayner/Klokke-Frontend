import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListsEditorSettings() {
  return (
    <View style={[styles.wrapper, styles.row]}>
      <Pressable
        style={[styles.buttonBorder, styles.addButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>Add New List</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBorder, styles.deleteButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>Delete List</Text>
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
  addButton: {
    marginRight: 16,
    marginLeft: 8,
    backgroundColor: 'green',
  },
  deleteButton: {
    marginRight: 8,
    marginLeft: 16,
    backgroundColor: 'red', 
  },
});
