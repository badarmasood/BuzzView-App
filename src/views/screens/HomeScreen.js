import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Touchable,
  ScrollView,
} from "react-native";

import COLORS from "../../consts/colors";

import ImageCard1 from "../../assets/card1.jpg";
import ImageCard2 from "../../assets/card2.jpg";
import ImageCard3 from "../../assets/card3.jpg";
import ImageCard4 from "../../assets/card4.jpg";

import Eggs from "../../assets/eggs.png";
function Cards(props) {
  return <Image source={props.ImageCard} style={style.cardImage} />;
}

const MyProducts = (prop, { navigation }) => {
  return (
    <TouchableOpacity style={style.card} onPress={prop.click}>
      <View style={{ alignItems: "center", top: -60 }}>
        <Image
          source={{
            uri: "https://img.taste.com.au/F0W1xU4i/taste/2018/02/cls0318eggss_eggs-135792-1.jpg",
          }}
          style={{ height: 120, width: 150 }}
        />

        <View style={{ marginHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {prop.tittle}
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
            {prop.quantity}
          </Text>
        </View>

        <View
          style={{
            marginTop: 5,
            marginLeft: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginRight: 50,
            }}
          >
            RS: {prop.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  const [data, setData] = useState({});

  // useEffect(() => {}, []);

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 10,
          marginTop: -10,
          paddingBottom: 10,
        }}
      >
        <MyProducts
          product={Eggs}
          tittle="Eggs"
          quantity="1 Dozen"
          price="10$"
        />
        <MyProducts
          product="Myegg"
          tittle="Eggs"
          quantity="1 Dozen"
          price="10$"
        />
        <MyProducts
          product={Eggs}
          tittle="Eggs"
          quantity="1 Dozen"
          price="10$"
        />
        <MyProducts
          product={Eggs}
          tittle="Eggs"
          quantity="1 Dozen"
          price="10$"
        />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#e7f6f1",
  },
  header: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#e7f6f1",
  },
  cardImage: {
    padding: 10,
    height: 150,
    resizeMode: "cover",
    width: 300,
    borderRadius: 15,
    // backgroundColor: "white",
    //backgroundColor: COLORS.primary,
    marginHorizontal: 8,
    marginVertical: 0,

    overflow: "hidden",
    //Properties to setup your Shadow

    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 150,
    width: 160,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 90,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
