import React, { useState } from "react";
import styled from "styled-components/native";
import MarqueeText from "react-native-marquee";
import Album from "../components/Album";
import Btn from "../components/Btn";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { TabbarImgPath } from "../utils";
import { BLACK_COLOR, SELECT_COLOR, WHITE_COLOR } from "../colors";
import BrowseList from "../components/BrowseList";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import VFloChatView from "../components/VFloChartView";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const array = [
  { data: "수록곡", id: 1 },
  { data: "상세정보", id: 2 },
];

const Text = styled.Text`
  font-size: 15px;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
`;
const ListText = styled.Text`
  font-size: 15px;
  flex: 10;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;
const Bottom = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
`;
const SingerName = styled.Text`
  margin-top: 5px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;
const DayText = styled.Text`
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;
const ScreenOne = () => (
  <View style={{ flex: 1 }}>
    <VFloChatView index={0} />
  </View>
);
const ScreenTwo = () => (
  <View>
    <FlatList
      data={array}
      horizontal
      style={{ flex: 1 }}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <BrowseList name={item.data} />}
    />
    <Text>상세정보가 없습니다.</Text>
  </View>
);

const AlbumView = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  console.log(data);
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Btn index={27} width={40} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20 }}>♡</Text>
          <Btn index={16} width={35} />
        </View>
      </View>
      <Wrapper>
        <Text style={{ fontSize: 20, color: "white" }}>회전목마</Text>
        <SingerName>Zion.T, 원슈타인</SingerName>
        <DayText>2022.01.03 싱글 인디팝,록</DayText>

        <TouchableOpacity
          onPress={() => navigation.navigate("AlbumPlayer", { data: data })}
        >
          <Album index={data.id - 1} />
        </TouchableOpacity>
      </Wrapper>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: BLACK_COLOR,
        }}
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          tabBarLabelStyle: {
            fontSize: 15,
            justifyContent: "center",
            fontWeight: "600",
          },
          tabBarActiveTintColor: SELECT_COLOR,
          tabBarInactiveTintColor: WHITE_COLOR,
        }}
      >
        <Tab.Screen name="수록곡" component={ScreenOne} />
        <Tab.Screen name="상세정보" component={ScreenTwo} />
      </Tab.Navigator>
    </Container>
  );
};

export default AlbumView;
