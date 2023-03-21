import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import YoutubeCard from "../component/YoutubeCard";
function YoutubeVideos() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Title of the First Video",
      imageUrl: "https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg",
      channel: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      imageUrl: "https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg",
      channel: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      imageUrl: "https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg",
      channel: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-11e29d72",
      title: "Fourth Item",
      imageUrl: "https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg",
      channel: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "58694a0f-3d1f-bd96-145571e29d72",
      title: "Fifth Item",
      imageUrl: "https://img.youtube.com/vi/MJyKN-8UncM/mqdefault.jpg",
      channel: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <YoutubeCard
            title={item.title}
            imageUrl={item.imageUrl}
            channel={item.channel}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default YoutubeVideos;
