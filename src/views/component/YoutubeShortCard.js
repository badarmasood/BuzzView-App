import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import { Video } from "expo-av";
import { Pressable } from "react-native";

import { SwiperFlatList } from "react-native-swiper-flatlist";
const { width } = Dimensions.get("window");

const ReelsScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [play, setPlay] = React.useState(false);

  const reels = [
    {
      id: "0",
      thumbnail: "https://picsum.photos/id/1011/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "1",
      thumbnail: "https://picsum.photos/id/1012/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "2",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "3",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <View style={styles.container} id="facebook">
      <Text style={styles.text}>Youtube Shorts</Text>

      <SwiperFlatList
        autoplayDelay={2}
        autoplayLoop
        index={0}
        data={reels}
        onChangeIndex={(index) => {}}
        renderItem={({ item }) => (
          <>
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <View style={styles.reelsItemContainer}>
                <Pressable
                  onPress={() => {
                    setPlay(!play);
                  }}
                >
                  <Video
                    ref={video}
                    style={styles.video}
                    source={require("../../assets/videos/nature2.mp4")}
                    resizeMode="cover"
                    isMuted
                    isLooping
                    shouldPlay={play}
                  />
                </Pressable>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.channel}>@Tiktok</Text>
                </View>
              </View>
            </View>
          </>
        )}
      />

      {/* <FlatList
        showsHorizontalScrollIndicator={true}
        data={reels}
        horizontal={true}
        onScroll={onScrolling}
        renderItem={({ item }) => (
          <>
            <View
              style={styles.reelsItemContainer}
              onLayout={(event) => setVideoPosition(event.nativeEvent.layout)}
            >
              <Pressable
              // onPress={() => {
              //   if (isPlaying) {
              //     video.current.pauseAsync();
              //   } else {
              //     video.current.playAsync();
              //   }
              //   setIsPlaying(!isPlaying);
              // }}
              >
                <Video
                  ref={video}
                  style={styles.video}
                  source={require("../../assets/videos/nature2.mp4")}
                  resizeMode="cover"
                  // onLayout={onVideoLayout}
                  isMuted
                  isLooping
                  shouldPlay={play}
                />
              </Pressable>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.channel}>@Tiktok</Text>
              </View>
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
      /> */}
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
    marginHorizontal: 15,
    width: 360,
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
    paddingBottom: 15,
  },
  child: { width, justifyContent: "center" },
});

export default ReelsScreen;
