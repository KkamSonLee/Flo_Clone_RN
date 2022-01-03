import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import BrowseList from "../components/BrowseList";
import { BLACK_COLOR, SELECT_COLOR, WHITE_COLOR } from "../colors";
import PlayerControl from "../components/PlayerControl";

const Tab = createMaterialTopTabNavigator();
const array_like = [
  { data: "곡", id: 1 },
  { data: "오디오", id: 2 },
  { data: "앨범", id: 3 },
  { data: "영상", id: 4 },
  { data: "아티스트", id: 5 },
  { data: "리스트", id: 6 },
];
const View = styled.View`
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
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
const ScreenOne = () => (
  <View>
    <Text>내 리스트가 없습니다.{"\n"}새로운 리스트를 만들어주세요.</Text>
  </View>
);
const ScreenTwo = () => (
  <View>
    <FlatList
      data={array_like}
      horizontal
      style={{ flex: 1 }}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <BrowseList name={item.data} />}
    />
    <ListText>좋아요 한 곡이 없습니다.</ListText>
  </View>
);
const ScreenThree = () => (
  <View>
    <Text>저장한 곡이 없습니다.</Text>
  </View>
);
const ScreenFour = () => (
  <View>
    <Text>많이 들은 곡이 없습니다.</Text>
  </View>
);
const ScreenFive = () => (
  <View>
    <FlatList
      data={array_like}
      horizontal
      style={{ flex: 1 }}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => <BrowseList name={item.data} />}
    />
    <ListText>팔로우한 크리에이터가 없습니다.</ListText>
  </View>
);
const ScreenSix = () => (
  <View>
    <Text>최근 들은 곡이 없습니다.</Text>
  </View>
);
const ScreenSeven = () => (
  <View>
    <Text>iPod 음악 파일이 없습니다</Text>
  </View>
);
const Bucket = () => {
  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: BLACK_COLOR,
        }}
        screenOptions={{
          tabBarScrollEnabled: true,
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
        <Tab.Screen name="내 리스트" component={ScreenOne} />
        <Tab.Screen name="♥좋아요" component={ScreenTwo} />
        <Tab.Screen name="저장한 곡" component={ScreenThree} />
        <Tab.Screen name="많이 들은" component={ScreenFour} />
        <Tab.Screen name="팔로잉" component={ScreenFive} />
        <Tab.Screen name="최근 감상" component={ScreenSix} />
        <Tab.Screen name="iPod 음악" component={ScreenSeven} />
      </Tab.Navigator>
      <PlayerControl />
    </>
  );
};
export default Bucket;
