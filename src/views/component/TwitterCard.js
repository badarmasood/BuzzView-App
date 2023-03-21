import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const tweetData = [
  {
    id: "1",
    username: "johndoe",
    userImage: require("../../assets/card1.jpg"),
    tweetText:
      "Excited to start my new job today! Excited to start my new job today! Excited to start my new job today! Excited to start my new job today!",
    postImage: require("../../assets/card2.jpg"),
    timestamp: "3h ago",
  },
  {
    id: "2",
    username: "janedoe",
    userImage: require("../../assets/card1.jpg"),
    tweetText: "Just finished reading a great book 📚 #bookworm",
    postImage: require("../../assets/card2.jpg"),
    timestamp: "1d ago",
  },
  // add more tweet items here
];

const HomeScreen = () => {
  const renderTweetItem = ({ item }) => {
    return (
      <View style={styles.tweetItem}>
        <View style={styles.tweetHeader}>
          <Image source={item.userImage} style={styles.userImage} />
          <View style={styles.tweetHeaderContent}>
            <Text style={styles.username}>{item.username}</Text>

            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        </View>
        <Text style={styles.tweetText}>{item.tweetText}</Text>
        <Image source={item.postImage} style={styles.postImage} />
      </View>
    );
  };

  return (
    <FlatList
      data={tweetData}
      keyExtractor={(item) => item.id}
      renderItem={renderTweetItem}
      style={styles.tweetList}
    />
  );
};

const styles = StyleSheet.create({
  tweetList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tweetItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tweetHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tweetHeaderContent: {
    flexDirection: "column",
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  timestamp: {
    color: "#aaa",
    fontSize: 12,
  },
  tweetText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
