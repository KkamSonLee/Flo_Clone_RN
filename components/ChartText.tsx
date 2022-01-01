import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Btn from "./Btn";

const MainText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

const SubText = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  margin-left: 10px;
`;
const Container = styled.View`
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ChartText = ({ Maintext, Subtext, Overview }) => {
  return (
    <Container>
      <Column>
        <MainText>{Maintext}</MainText>
        <SubText>{Subtext}</SubText>
        <Btn index={7} width={40} />
        <Text style={{ fontSize: 14, color: "white" }}>전체듣기</Text>
      </Column>
      <SubText>{Overview}</SubText>
    </Container>
  );
};
export default ChartText;
