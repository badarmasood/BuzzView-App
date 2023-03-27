import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Touchable,
  ScrollView,
} from "react-native";
import FacebookCard from "../component/FacebookCard";
function Facebook() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Facebook Reels</Text>
        <FacebookCard />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    height: 150,
  },
  text: {
    padding: 10,

    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Facebook;
