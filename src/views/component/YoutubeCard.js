import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const YoutubeCard = ({ title, imageUrl, channel }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: imageUrl }} style={{ height: 200 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: channel }}
            style={{ height: 40, width: 40, borderRadius: 30, margin: 10 }}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingLeft: 6,
                paddingTop: -1,
                color: "gray",
              }}
            >
              Scrooge McDuck . {parseInt(Math.random() * 1000)}K Views
            </Text>
            <Text
              style={{
                paddingLeft: 6,
                color: "gray",
              }}
            >
              {parseInt(Math.random() * 10)} months ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 300,
    borderStyle: "solid",
    borderBottomColor: "gray",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    paddingLeft: 6,
    paddingTop: 10,
    shadowOpacity: 0,
  },
});

export default YoutubeCard;
