import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredReportListState } from '../recoil_report_filter_state';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ListSelect from '../components/DropdownListsSelect';
import TagsMultiSelect from '../components/DropdownTagsMultiSelect';
import {
  print,
  printToPdfFile,
  selectPrinter,
} from '../utilities/exportReportUtils';
import DoubleDatePicker from '../components/reports/DoubleDatePicker';
// import ChartComponent from '../components/reports/TimeSheetReport';

export default function ReportsScreen() {
  // const [selectedPrinter, setSelectedPrinter] = React.useState();
  const timersList = useRecoilValue(filteredReportListState);

  return (
    <View style={styles.wrapperContainer}>
      <LinearGradient
        colors={['rgba(36, 157, 255, 1)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      />
      <View style={styles.filtersContainer}>
        <DoubleDatePicker />
        <View style={styles.dropdownsSpacer} />
        <ListSelect mode={'filterReports'} />
        <View style={styles.dropdownsSpacer} />
        <TagsMultiSelect mode={'filterReports'} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* <ChartComponent /> */}
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
        <Text style={styles.placeholdertexttobedeleted}>{`Chart / Graph / TimeSheet GOES HERE:\n...first...\nexpo install react-native-charts-wrapper\n...then...\nexpo needs to be ejected before it will work\n\n`}</Text>
      </ScrollView>

      <View style={styles.exportsContainer}>
        <Pressable
          style={[styles.buttonBorder, styles.leftButton]}
          onPress={() => {}}
        >
          <FontAwesome5 name="file-csv" size={24} color="black" />
        </Pressable>
        <Pressable
          style={[styles.buttonBorder, styles.centerButton]}
          onPress={printToPdfFile}
        >
          <MaterialIcons name="picture-as-pdf" size={24} color="black" />
        </Pressable>
        <Pressable
          style={[styles.buttonBorder, styles.centerButton]}
          onPress={print}
        >
          <MaterialIcons name="print" size={24} color="black" />
        </Pressable>
        <Pressable
          style={[styles.buttonBorder, styles.rightButton]}
          onPress={() => {}}
        >
          <MaterialIcons name="email" size={24} color="black" />
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 16,
  },
  filtersContainer: {
    width: '100%',
    paddingVertical: 4,
  },
  dropdownsSpacer: {
    paddingTop: 4,
  },
  scrollView: {
    width: '100%',
  },
  exportsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
  leftButton: {
    marginRight: 8,
  },
  centerButton: {
    marginHorizontal: 8,
  },
  rightButton: {
    marginLeft: 8,
  },
  placeholdertexttobedeleted: {
    textAlign: 'center',
  },
});