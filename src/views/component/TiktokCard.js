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

import { Video } from "expo-av";

// const { width, height } = Dimensions.get("window");
// console.log("Dimensions",Dimensions.get("window"))
const { width } = Dimensions.get("window");
const height = 690;

const TikTokItem = ({ item }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.tiktokItemContainer}>
      {/* <Video
        source={{ uri: item.videoUrl }}
        style={styles.video}
        resizeMode="cover"
        isLooping={true}
        isMuted={true}
        useNativeControls
      /> */}
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="cover"
        isLooping={true}
        isMuted={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const TikTokScreen = () => {
  const tiktoks = [
    {
      id: "1",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      username: "john_doe",
      description: "My first TikTok video!",
    },
    {
      id: "2",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "jane_doe",
      description: "Check out my new dance!",
    },
    {
      id: "3",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "jimmy",
      description: "Hiking in the mountains!",
    },
    {
      id: "4",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "jimmy",
      description: "Hiking in the mountains!",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tiktoks}
        renderItem={({ item }) => <TikTokItem item={item} />}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  tiktokItemContainer: {
    width: width,
    height: height,
  },
  //   video: {
  //     width: "100%",
  //     height: "100%",
  //   },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "80%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TikTokScreen;
