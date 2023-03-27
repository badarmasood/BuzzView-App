import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const feedData = [
  {
    id: "1",
    username: "johndoe",
    userImage: require("../../assets/card1.jpg"),
    postImage: require("../../assets/card1.jpg"),
    likes: "100",
    caption: "Beautiful day at the beach 🏖️☀️",
    comments: "5",
  },
  {
    id: "2",
    username: "janedoe",
    userImage: require("../../assets/card2.jpg"),
    postImage: require("../../assets/card2.jpg"),
    likes: "200",
    caption: "Exploring the city 🏙️🚶‍♀️",
    comments: "10",
  },
  {
    id: "3",
    username: "janedoe",
    userImage: require("../../assets/card2.jpg"),
    postImage: require("../../assets/card2.jpg"),
    likes: "200",
    caption: "Exploring the city 🏙️🚶‍♀️",
    comments: "10",
  },
  {
    id: "4",
    username: "janedoe",
    userImage: require("../../assets/card2.jpg"),
    postImage: require("../../assets/card2.jpg"),
    likes: "200",
    caption: "Exploring the city 🏙️🚶‍♀️",
    comments: "10",
  },
];

const HomeScreen = () => {
  const renderFeedItem = ({ item }) => {
    return (
      <View style={styles.feedItem}>
        <View style={styles.feedHeader}>
          <Image source={item.userImage} style={styles.userImage} />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Image source={item.postImage} style={styles.postImage} />
        <View style={styles.feedFooter}>
          <Text style={styles.likes}>{item.likes} likes</Text>
          <Text style={styles.caption}>{item.caption}</Text>
          <Text style={styles.comments}>{item.comments} comments</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={feedData}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={renderFeedItem}
      style={styles.feed}
    />
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feedItem: {
    marginBottom: 20,
  },
  feedHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  feedFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  caption: {
    marginBottom: 5,
  },
  comments: {},
});

export default HomeScreen;
