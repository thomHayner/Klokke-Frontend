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
import ListSelect from '../timers/DropdownListsSelect';
import TagsMultiSelect from '../timers/DropdownTagsMultiSelect';

export default function ReportsScreen() {
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
          <View style={[styles.sectionHeader, styles.row]}>
            <Text style={styles.sectionHeaderText}>Filter</Text>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>

          <View style={styles.sectionBody}>
            <View style={styles.dropdownsContainer}>
              <Text>Date Range Filter GOES HERE</Text>
              <View style={styles.dropdownsSpacer} />
              <ListSelect mode={'select'} />
              <View style={styles.dropdownsSpacer} />
              <TagsMultiSelect mode={'select'} />
            </View>
          </View>
        </View>
        
        <View style={styles.container}>
          <View style={[styles.sectionHeader, styles.row]}>
            <Text style={styles.sectionHeaderText}>Time Sheet</Text>
            <MaterialIcons
              name="calendar-today"
              size={22}
              color="black"
              style={styles.icon}
            />
          </View>
          <View style={styles.sectionBody}>
            <Text>Chart / Graph / TimeSheet GOES HERE</Text>
          </View>
        </View>
        
        <View style={styles.container}>
          <View style={[styles.sectionHeader, styles.row]}>
            <Text style={styles.sectionHeaderText}>Export</Text>
            <MaterialIcons
              name="import-export"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionHeaderText}>or Print</Text>
            <MaterialIcons
              name="print"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>
          <View style={styles.sectionBody}>
            <Text>Email Report GOES HERE</Text>
            <Text>Export to .pdf/.csv GOES HERE</Text>
            <Text>Print Goes Here</Text>
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
  row: {
    flexDirection: 'row',
  },
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
  icon: {
    marginHorizontal: 8,
  },
  dropdownsContainer: {
    width: '100%',
    paddingTop: 8,
    // paddingHorizontal: 16,
    gap: 4,
  },
  dropdownsSpacer: {
    paddingTop: 4,
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
    marginRight: 16,
    marginLeft: 8,
  },
  darkModeButton: {
    marginHorizontal: 8,
  },
  systemModeButton: {
    marginRight: 8,
    marginLeft: 16,
  },
});