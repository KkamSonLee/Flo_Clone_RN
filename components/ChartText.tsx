import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Btn from "./Btn";

const MainText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 600;
  margin-right: 10px;
`;

const SubText = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  margin-right: 50px;
`;
const Container = styled.View`
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgba(12, 19, 26, 1);
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ChartText = () => {
  return (
    <Container>
      <Column>
        <MainText>FLO 차트</MainText>
        <SubText>02시 기준</SubText>
        <Btn index={7} width={40} />
        <Text style={{ fontSize: 17, color: "white" }}>전체듣기</Text>
      </Column>
      <SubText>최근 24시간 집계, FLO 최고 인기곡 차트!</SubText>
    </Container>
  );
};
export default ChartText;
