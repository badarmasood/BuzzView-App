//
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import FacebookCard from "../component/FacebookCard";
import InstagramCard from "../component/InstagramCard";
import TiktokCard from "../component/TiktokCard";
import YoutubeVideosCard from "../component/YoutubeCard";
import TwitterCard from "../component/TwitterCard";
import YoutubeShortCard from "../component/YoutubeShortCard";
import TabBar from "../component/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";

function Homescreen() {
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [ref, setRef] = useState(null);

  const scrollHandler = () => {
    if (dataSourceCords.length > scrollToIndex) {
      ref.scrollTo({
        x: 0,
        y: dataSourceCords[scrollToIndex - 1],
        animated: true,
      });
    } else {
      alert("Error in scrolling");
    }
  };
  console.log("scrollToIndex", scrollToIndex);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            ref={(ref) => {
              setRef(ref);
            }}
          >
            <View
              key={0}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[0] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <YoutubeShortCard />
            </View>
            <Text></Text>
            <View
              key={1}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[1] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <TiktokCard />
            </View>
            <Text></Text>
            <View
              key={2}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[2] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <InstagramCard />
            </View>
            <Text></Text>
            <View
              key={3}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[3] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <YoutubeVideosCard />
            </View>
            <Text></Text>
            <View
              key={4}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[4] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <TwitterCard />
            </View>

            <Text></Text>
            <View
              key={5}
              style={styles.item}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                dataSourceCords[5] = layout.y;
                setDataSourceCords(dataSourceCords);
              }}
            >
              <FacebookCard />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <TabBar
        scrollHandler={scrollHandler}
        setScrollToIndex={setScrollToIndex}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Homescreen;
