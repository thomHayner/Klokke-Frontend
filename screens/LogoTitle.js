import { Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function LogoTitle() {
  return (
    <View style={styles.wrapper}>
      <MaterialIcons name="av-timer" size={30} color="black" />
      <Text style={styles.text}>Klokke</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  text: {
    // fontFamily: 'Orbitron_900Black',
    fontSize: 30,
    marginLeft: 10,
  }
});
