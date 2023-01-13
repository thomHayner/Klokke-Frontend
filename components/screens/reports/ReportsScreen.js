import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ReportsScreen() {
  return (
    <View style={styles.safeAreaContainer}>
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
      
      <Text>Reports!</Text>
      
      <View>
        <Text>Date Range Filter GOES HERE</Text>
        <Text>List Filter GOES HERE</Text>
        <Text>Tags Filter GOES HERE</Text>
      </View>
      
      <View>
        <Text>Chart / Graph / TimeSheet GOES HERE</Text>
      </View>
      
      <View>
        <Text>Email Report GOES HERE</Text>
        <Text>Export to .pdf/.csv GOES HERE</Text>
        <Text>Print Goes Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});