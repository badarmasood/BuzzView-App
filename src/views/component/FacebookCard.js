import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import NatureVideo from "../../../src/assets/videos/nature.mp4";
const { width } = Dimensions.get("window");
const height = 690;

const ReelsItem = ({ item }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.reelsItemContainer}>
      {/* <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} /> */}
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/videos/nature.mp4")}
        resizeMode="cover"
        isMuted
        autoplay
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.channel}>@Tiktok</Text>
      </View>

      {/* <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{item.caption}</Text>
      </View> */}
    </View>
  );
};

const ReelsScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const reels = [
    {
      id: "1",
      thumbnail: "https://picsum.photos/id/1011/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "2",
      thumbnail: "https://picsum.photos/id/1012/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "3",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "4",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "5",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "6",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        horizontal={true}
        renderItem={({ item }) => <ReelsItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    backgroundColor: "#eee",
  },
  reelsItemContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    width: 350,
    backgroundColor: "grey",
    borderRadius: 20,
    // height: "70%",
    elevation: 10,
  },
  video: {
    width: 350,
    height: "70%",
    borderRadius: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: "auto",
    height: "80%",
    borderRadius: 20,
  },
  captionContainer: {
    padding: 10,
  },
  caption: {
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "700",
  },
  channel: {
    lineHeight: 25,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ReelsScreen;
