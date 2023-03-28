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
import InstagramCard from "../component/InstagramCard";

function Facebook() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <FacebookCard />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Facebook;
