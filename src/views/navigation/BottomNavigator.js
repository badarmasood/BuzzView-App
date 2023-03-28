import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

import COLORS from "../../consts/colors";
import HomeScreen from "../screens/HomeScreen";
import YoutubeShort from "../screens/YoutubeShort";
import Tiktok from "../screens/Tiktok";
import Instagram from "../screens/Instagram";
import YoutubeVideos from "../screens/YoutubeVideos";
import Twitter from "../screens/Twitter";
import Facebook from "../screens/Facebook";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#37b34e",
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            display: "flex",
            height: 70,
            marginBottom: 0,
            paddingHorizontal: 10,
            paddingBottom: 15,
            paddingTop: 10,
          },
        ],
      }}
    >
      <Tab.Screen
        name="YT Shorts"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ color }) => (
              <Icon name="youtube-play" color={color} size={28} />
            ),
          };
        }}
      />

      <Tab.Screen
        name="Tiktok"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ color }) => (
              <Icon
                name="facebook"
                color={color}
                size={28}
                onPress={() => {
                  // Navigate using the `navigation` prop that you received
                  navigation.navigate("YT Shorts");
                }}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Instagram"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ color }) => (
              <Icon name="instagram" color={color} size={28} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="YT Videos"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="youtube-play" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Twitter"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="twitter" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Fb Reels"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ color }) => (
              <Icon name="facebook" color={color} size={28} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
