import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import { DARK_COLOR, SELECT_COLOR } from "../colors";
import { Dimensions } from "react-native";
import ChartText from "./ChartText";
import VFloChatView from "./VFloChartView";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  flex: 1;
`;

const VFloChartForm = ({ Maintext, Subtext, Overview }) => {
  return (
    <Container
      style={{
        borderRadius: 20,
        backgroundColor: DARK_COLOR,
        margin: 10,
      }}
    >
      <ChartText Maintext={Maintext} Subtext={Subtext} Overview={Overview} />
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
    </Container>
  );
};
export default VFloChartForm;
