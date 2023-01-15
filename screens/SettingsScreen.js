import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import AccountSettings from '../components/settings/Account';
import PremiumSettings from '../components/settings/Premium';
import ListsEditorSettings from '../components/settings/ListsEditor';

export default function SettingsScreen() {
  return (
    <View style={styles.wrapperContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(36, 157, 255, 1)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Account</Text>
          </View>
          <AccountSettings />
        </View>

        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Premium</Text>
          </View>
          <PremiumSettings />
        </View>

        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Lists</Text>
          </View>
          <ListsEditorSettings />
        </View>

        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Tags</Text>
          </View>

          <View style={[styles.sectionBody, styles.row, { marginTop: 0, }]}>
            <Pressable
              style={[styles.buttonBorder, styles.addButton]}
              onPress={() => {}}
            >
              <Text style={styles.buttonLabel}>Add New Tag</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonBorder, styles.deleteButton]}
              onPress={() => {}}
            >
              <Text style={styles.buttonLabel}>Delete Tag</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>App Theme</Text>
          </View>

          <View style={[styles.sectionBody, styles.row]}>
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
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 8,
    paddingBottom: 16,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  container: {
    // flex: 1,
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    paddingVertical: 12,
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
  sectionHeader: {
    width: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignItems: 'end',
    alignContent: 'end',
    marginVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 20,
  },
  sectionBody: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
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
  premiumButton: {
    width: '75%',
    marginHorizontal: 8,
    backgroundColor: 'lightblue', 
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
