import React, { useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import VFloChatView from "../components/VFloChartView";
import { DARK_COLOR, SELECT_COLOR } from "../colors";
import ChartText from "../components/ChartText";
import BrowseList from "../components/BrowseList";
import VFloChartForm from "../components/VFloChartForm";

const array = [
  { data: "차트", id: 1 },
  { data: "장르/테마", id: 2 },
  { data: "오디오", id: 3 },
  { data: "영상", id: 4 },
  { data: "크리에이터", id: 5 },
];
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
const Browse = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <FlatList
            data={array}
            horizontal
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => <BrowseList name={item.data} />}
          />
          <TouchableOpacity
            onPress={() => navigate("Stack", { screen: "One" })}
          >
            <Text>차트{">"}</Text>
          </TouchableOpacity>
          <VFloChartForm
            Maintext={"FLO 차트"}
            Subtext={"02시 기준"}
            Overview={"최근 24시간 집계, FLO 최고 인기곡 차트!"}
          />
          <VFloChartForm
            Maintext={"해외 소셜 차트"}
            Subtext={"12/21~12/27"}
            Overview={"유튜브, 틱톡 등 글로벌 트렌드를 한 눈에!"}
          />
          <VFloChartForm
            Maintext={"V컬러링 차트"}
            Subtext={"12/25~01/01"}
            Overview={"나를 표현하는 '보이는 컬러링' 요즘엔 어떤 거?"}
          />
        </>
      }
      ItemSeparatorComponent={VSeperator}
    />
  );
};

export default Browse;
