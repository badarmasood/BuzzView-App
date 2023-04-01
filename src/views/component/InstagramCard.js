import React, { useState } from "react";
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
import { TouchableOpacity } from "react-native";

const ReelsItem = ({ item }) => {
  const video = React.useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.reelsItemContainer}>
      <TouchableOpacity
        onPress={() => {
          if (isPlaying) {
            video.current.pauseAsync();
          } else {
            video.current.playAsync();
          }
          setIsPlaying(!isPlaying);
        }}
      >
        <Video
          ref={video}
          style={styles.video}
          source={require("../../assets/videos/nature1.mp4")}
          resizeMode="cover"
          isMuted
          isLooping
        />
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.channel}>@Tiktok</Text>
      </View>
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
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram Reels</Text>
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

// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// const feedData = [
//   {
//     id: "1",
//     username: "johndoe",
//     userImage: require("../../assets/card1.jpg"),
//     postImage: require("../../assets/card1.jpg"),
//     likes: "100",
//     caption: "Beautiful day at the beach 🏖️☀️",
//     comments: "5",
//   },
//   {
//     id: "2",
//     username: "janedoe",
//     userImage: require("../../assets/card2.jpg"),
//     postImage: require("../../assets/card2.jpg"),
//     likes: "200",
//     caption: "Exploring the city 🏙️🚶‍♀️",
//     comments: "10",
//   },
//   {
//     id: "3",
//     username: "janedoe",
//     userImage: require("../../assets/card2.jpg"),
//     postImage: require("../../assets/card2.jpg"),
//     likes: "200",
//     caption: "Exploring the city 🏙️🚶‍♀️",
//     comments: "10",
//   },
//   {
//     id: "4",
//     username: "janedoe",
//     userImage: require("../../assets/card2.jpg"),
//     postImage: require("../../assets/card2.jpg"),
//     likes: "200",
//     caption: "Exploring the city 🏙️🚶‍♀️",
//     comments: "10",
//   },
// ];

// const HomeScreen = () => {
//   const renderFeedItem = ({ item }) => {
//     return (
//       <View style={styles.feedItem}>
//         <View style={styles.feedHeader}>
//           <Image source={item.userImage} style={styles.userImage} />
//           <Text style={styles.username}>{item.username}</Text>
//         </View>
//         <Image source={item.postImage} style={styles.postImage} />
//         <View style={styles.feedFooter}>
//           <Text style={styles.likes}>{item.likes} likes</Text>
//           <Text style={styles.caption}>{item.caption}</Text>
//           <Text style={styles.comments}>{item.comments} comments</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={feedData}
//       horizontal={true}
//       keyExtractor={(item) => item.id}
//       renderItem={renderFeedItem}
//       style={styles.feed}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   feed: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   feedItem: {
//     marginBottom: 20,
//   },
//   feedHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//   },
//   userImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   username: {
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   postImage: {
//     width: "100%",
//     height: 300,
//   },
//   feedFooter: {
//     padding: 10,
//   },
//   likes: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   caption: {
//     marginBottom: 5,
//   },
//   comments: {},
// });

// export default HomeScreen;
