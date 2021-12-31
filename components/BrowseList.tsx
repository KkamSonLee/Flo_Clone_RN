import React from "react";
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
  border-radius: 30;
  border-width: 1;
  border-color: rgba(0, 0, 0, 1);
  padding: 10px;
`;
const Text = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16;
`;

const BrowseList = ({ name }) => {
  return (
    <ChatView style={{ backgroundColor: DARK_COLOR }}>
      <Text>{name}</Text>
    </ChatView>
  );
};
export default BrowseList;
