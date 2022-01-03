import React from "react";
import styled from "styled-components/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MarqueeText from "react-native-marquee";
import Btn from "./Btn";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const PlayPanel = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  color: #383838;
  height: 50px;
  justify-content: space-between;
`;
const PlayerControl = () => {
  return (
    <PlayPanel style={StyleSheet.hairlineWidth}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 10, color: "white" }}>
          회전목마(Feat. Zion.T, 원슈타인) (Prod.Solm)
        </Text>
        <Text style={{ color: "white", opacity: 0.6 }}>sokodomo</Text>
      </View>
      <Btn index={20} width={40} />
      <Btn index={21} width={40} />
      <Btn index={22} width={40} />
      <Btn index={26} width={40} />
    </PlayPanel>
  );
};
export default PlayerControl;
