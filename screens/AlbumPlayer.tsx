import React, { useState } from "react";
import styled from "styled-components/native";
import MarqueeText from "react-native-marquee";
import Album from "../components/Album";
import Btn from "../components/Btn";
import { Image, View } from "react-native";
import { TabbarImgPath } from "../utils";

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
  color: white;
  font-size: 10px;
`;
const LyricsText = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;
const AlbumPlayer = () => {
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
        <View style={{ flexDirection: "row" }}>
          <Btn index={13} width={40} />
          <Btn index={14} width={40} />
        </View>
        <Btn index={15} width={35} />
      </View>
      <View style={{ alignItems: "flex-end", marginHorizontal: 10 }}>
        <Btn index={16} width={40} />
      </View>
      <Wrapper>
        <MarqueeText
          style={{ fontSize: 20, color: "white" }}
          duration={5000}
          loop
          marqueeOnStart
          marqueeDelay={2000}
          marqueeResetDelay={1000}
        >
          회전목마(Feat. Zion.T, 원슈타인) (Prod.Solm)
        </MarqueeText>
        <SingerName>sokodomo {">"}</SingerName>
        <Btn index={12} width={250} />
        <LyricsText>내가 슬플 때마다 {"\n"}이 노래가 찾아와</LyricsText>
        <View style={{ flexDirection: "row" }}>
          <Btn index={17} width={40} />
          <Btn index={18} width={40} />
        </View>
        <Bottom>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Btn index={19} width={40} />
            <Btn index={20} width={40} />
            <Btn index={21} width={40} />
            <Btn index={22} width={40} />
            <Btn index={23} width={40} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 20,
              flex: 1,
            }}
          >
            <Btn index={24} width={40} />
            <Image
              source={TabbarImgPath[25].tabSrc}
              style={{ width: 60, height: 30 }}
            />
            <Btn index={26} width={40} />
          </View>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default AlbumPlayer;
