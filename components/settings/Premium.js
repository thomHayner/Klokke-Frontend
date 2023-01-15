import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PremiumSettings() {

  return (
    <View style={styles.wrapper}>
      <View style={{ alignSelf: 'start', }}>
        <Text>Premium Features Include:</Text>
        <View style={[styles.container, { paddingLeft: 16 }]}>
          <Text>- Cloud Storage</Text>
          <Text>- Cross Platform Timers</Text>
          <Text>- Smart Watch Apps for iOS and Android</Text>
          <Text>- Desktop, Mobile and Browser Widgets</Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonBorder, styles.premiumButton]}
        onPress={() => {}}
      >
        <Text style={styles.buttonLabel}>Go Premium!</Text>
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
  container: {
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    paddingVertical: 12,
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
});
