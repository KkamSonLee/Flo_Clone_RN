import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import { DARK_COLOR } from "../colors";
import HAlbum from "../components/HAlbum";
import VFloChart from "./VFloChart";

const ChatView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const VFloChatView = ({ index }) => {
  return (
    <ChatView style={{ backgroundColor: DARK_COLOR }}>
      <VFloChart index={index} mainTitle={"ssadasadsad"} subTitle={"sadas"} />
      <VFloChart
        index={index + 1}
        mainTitle={"ssadassadadsad"}
        subTitle={"sadas"}
      />
      <VFloChart index={index + 2} mainTitle={"asadsad"} subTitle={"sadas"} />
      <VFloChart
        index={index + 3}
        mainTitle={"qqsasdpsadm"}
        subTitle={"sadas"}
      />
    </ChatView>
  );
};
export default VFloChatView;
