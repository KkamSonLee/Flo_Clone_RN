import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Dimensions, Image, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import VFloChatView from "../components/VFloChartView";
import { DARK_COLOR, SELECT_COLOR } from "../colors";
import ChartText from "../components/ChartText";
import BrowseList from "../components/BrowseList";

const array = ["차트", "장르/테마", "오디오", "영상", "크리에이터"];
const Container = styled.View`
  flex: 1;
`;
const VSeperator = styled.View`
  width: 20px;
`;
const Text = styled.Text`
  font-size: 25px;
  margin: 15px;
  color: white;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const Browse = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <FlatList
            data={array}
            horizontal
            renderItem={({ item }) => <BrowseList name={item} />}
          />
          <Text>차트{">"}</Text>
          <ChartText />
          <Swiper
            horizontal
            loop
            autoplay
            autoplayTimeout={3.5}
            showsButtons={false}
            activeDotColor={SELECT_COLOR}
            containerStyle={{
              width: "100%",
              height: SCREEN_HEIGHT / 2 - 50,
            }}
          >
            <VFloChatView index={0} />
            <VFloChatView index={4} />
          </Swiper>
        </>
      }
      keyExtractor={(item) => item.id + ""}
      ItemSeparatorComponent={VSeperator}
    />
  );
};

export default Browse;
