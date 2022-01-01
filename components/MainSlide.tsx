import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import styled from "styled-components/native";
import { SlideImg } from "../utils";
import { BlurView } from "expo-blur";
import Btn from "./Btn";
import SmallImage from "./SmallImage";

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
`;
const Column = styled.View`
  margin-left: 15px;
  align-items: flex-start;
`;
const BgImg = styled.Image`
  width: 100%;
`;
const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;
const SubTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MainSlide = () => {
  return (
    <View style={{ flex: 1, height: SCREEN_HEIGHT / 1.8 }}>
      <BgImg
        style={StyleSheet.absoluteFill}
        source={require("../drawable_flo/img_default_4_x_1.png")}
      />
      <Wrapper>
        <Column>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Btn index={8} width={50} />
            <Btn index={9} width={50} />
            <Btn index={10} width={50} />
          </View>
          <SubTitle>나를 위한 새로운 발견</SubTitle>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 10,
              justifyContent: "flex-start",
            }}
          >
            <Title>국내 알앤비 추천음악</Title>
            <Btn index={11} width={70} />
          </View>
          <Text style={{ fontSize: 16, color: "white", opacity: 0.7 }}>
            총 50곡 2021.12.20 new
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              margin: 10,
              justifyContent: "flex-start",
            }}
          >
            <SmallImage index={1} />
            <Column>
              <SubTitle>Lilac</SubTitle>
              <Text style={{ fontSize: 16, color: "white", opacity: 0.7 }}>
                아이유
              </Text>
            </Column>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              margin: 10,
              marginBottom: 30,
              justifyContent: "flex-start",
            }}
          >
            <SmallImage index={4} />
            <Column>
              <SubTitle>Savage</SubTitle>
              <Text style={{ fontSize: 16, color: "white", opacity: 0.7 }}>
                에스파
              </Text>
            </Column>
          </View>
        </Column>
      </Wrapper>
    </View>
  );
};
export default MainSlide;
