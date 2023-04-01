import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function TabBar({ scrollHandler, setScrollToIndex }) {
  const [YTshorts, setYTshorts] = useState(true);
  const [Tiktok, setTiktok] = useState(false);
  const [Instagram, setInstagram] = useState(false);
  const [YTvideos, setYTvideos] = useState(false);
  const [Twitter, setTwitter] = useState(false);
  const [FbReels, setFbReels] = useState(false);

  const activeColor = "#37b34e";
  const activeText = {
    fontSize: 12,
    fontWeight: "400",
    color: "#37b34e",
  };
  return (
    <View style={styles.tab}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          setFbReels(false);
          setTiktok(false);
          setInstagram(false);
          setTwitter(false);
          setYTvideos(false);
          setYTshorts(true);
          scrollHandler();
          setScrollToIndex(0);
        }}
      >
        <Icon
          name="youtube-play"
          color={YTshorts ? activeColor : "grey"}
          size={28}
        />
        <Text style={YTshorts ? activeText : styles.text}>YT Shorts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          scrollHandler();
          setScrollToIndex(2);
          setFbReels(false);
          setYTshorts(false);
          setInstagram(false);
          setTwitter(false);
          setYTvideos(false);
          setTiktok(true);
        }}
      >
        <Icon name="facebook" color={Tiktok ? activeColor : "grey"} size={28} />
        <Text style={Tiktok ? activeText : styles.text}>Tiktok</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          setFbReels(false);
          setYTshorts(false);
          setTiktok(false);
          setTwitter(false);
          setYTvideos(false);
          setInstagram(true);
          scrollHandler();
          setScrollToIndex(3);
        }}
      >
        <Icon
          name="instagram"
          color={Instagram ? activeColor : "grey"}
          size={28}
        />
        <Text style={Instagram ? activeText : styles.text}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          setFbReels(false);
          setYTshorts(false);
          setTiktok(false);
          setTwitter(false);
          setInstagram(false);
          setYTvideos(true);
          scrollHandler();
          setScrollToIndex(4);
        }}
      >
        <Icon
          name="youtube-play"
          color={YTvideos ? activeColor : "grey"}
          size={28}
        />
        <Text style={YTvideos ? activeText : styles.text}>YT Videos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          setFbReels(false);
          setYTshorts(false);
          setTiktok(false);
          setInstagram(false);
          setYTvideos(false);
          setTwitter(true);
          scrollHandler();
          setScrollToIndex(5);
        }}
      >
        <Icon name="twitter" color={Twitter ? activeColor : "grey"} size={28} />
        <Text style={Twitter ? activeText : styles.text}>Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          setFbReels(true);
          setYTshorts(false);
          setTiktok(false);
          setInstagram(false);
          setYTvideos(false);
          setTwitter(false);
          scrollHandler();
          setScrollToIndex(5);
        }}
      >
        <Icon
          name="facebook"
          color={FbReels ? activeColor : "grey"}
          size={28}
        />
        <Text style={FbReels ? activeText : styles.text}>Fb Reels</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    height: 70,
    backgroundColor: "white",
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
  },

  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "grey",
  },
});
export default TabBar;
