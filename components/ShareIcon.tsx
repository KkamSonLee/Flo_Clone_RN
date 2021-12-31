import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { IconPath } from "../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 30;
`;
const InfoText = styled.Text`
  font-size: 9;
  color: white;
`;
const CooperText = styled.Text`
  font-size: 7;
  color: white;
`;
const Image = styled.Image`
  width: 25px;
  height: 25px;
  margin: 10px;
`;
const ShareIcon = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Image source={IconPath[0].Iconsrc} />
        <Image source={IconPath[1].Iconsrc} />
        <Image source={IconPath[2].Iconsrc} />
        <Image source={IconPath[3].Iconsrc} />
      </Container>
      <InfoText>(주)드림어스컴퍼니 사업자 정보</InfoText>
      <CooperText>@ DREAMUS CO., LTD.</CooperText>
    </View>
  );
};
export default ShareIcon;
