import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ReelsItem = ({ item }) => {
  return (
    <View style={styles.reelsItemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    </View>
  );
};

const ReelsScreen = () => {
  const reels = [
    {
      id: "1",
      thumbnail: "https://picsum.photos/id/1011/200/300",
      caption: "First Reel",
    },
    {
      id: "2",
      thumbnail: "https://picsum.photos/id/1012/200/300",
      caption: "Second Reel",
    },
    {
      id: "3",
      thumbnail: "https://picsum.photos/id/1013/200/300",
      caption: "Third Reel",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={({ item }) => <ReelsItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  reelsItemContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  thumbnail: {
    width: "100%",
    height: 300,
  },
  captionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  caption: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReelsScreen;
