//
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
import TiktokCard from "../component/TiktokCard";
import YoutubeVideosCard from "../component/YoutubeCard";
import TwitterCard from "../component/TwitterCard";
import YoutubeShortCard from "../component/YoutubeShortCard";

function Homescreen() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <YoutubeShortCard />
          <Text></Text>
          <TiktokCard />
          <Text></Text>
          <InstagramCard />
          <Text></Text>
          <YoutubeVideosCard />
          <Text></Text>
          <TwitterCard />
          <Text></Text>
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

export default Homescreen;
