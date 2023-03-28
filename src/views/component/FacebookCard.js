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
const { width } = Dimensions.get("window");
const height = 690;

const ReelsItem = ({ item }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.reelsItemContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/videos/nature2.mp4")}
        resizeMode="cover"
        isMuted
        autoplay
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.channel}>@Tiktok</Text>
      </View>
    </View>
  );
};

const ReelsScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const reels = [
    {
      id: "1",
      thumbnail: "https://picsum.photos/id/1011/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "2",
      thumbnail: "https://picsum.photos/id/1012/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "3",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "4",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "5",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "6",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <View style={styles.container} id="facebook">
      <Text style={styles.text}>Facebook Reels</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
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
    flex: 1,
    paddingVertical: 25,
    backgroundColor: "#dddddd",
  },
  reelsItemContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    width: 310,
    backgroundColor: "#eee",
    borderRadius: 20,
    elevation: 8,
    shadowColor: "black",
  },
  text: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  video: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  thumbnail: {
    width: "auto",
    height: "80%",
    borderRadius: 20,
  },
  descriptionContainer: {
    padding: 10,
    height: "20%",
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
  },
  channel: {
    lineHeight: 25,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ReelsScreen;
