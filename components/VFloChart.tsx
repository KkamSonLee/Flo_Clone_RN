import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { DARK_COLOR } from "../colors";
import Btn from "./Btn";
import SmallImage from "./SmallImage";

const View = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
`;

const Column = styled.View`
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  flex: 3;
`;
const Title = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const SubTitle = styled.Text`
  color: white;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

const VFloChart = ({ index, mainTitle, subTitle }) => (
  <View>
    <SmallImage index={index} />
    <Text style={{ fontSize: 20, color: "white", flex: 1, marginLeft: 20 }}>
      {index + 1}
    </Text>
    <Column>
      <Title>{mainTitle}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Column>
    <Btn index={7} width={40} />
  </View>
);
export default VFloChart;
