import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { DARK_COLOR, SELECT_COLOR } from "../colors";
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
  font-size: 16px;
`;

const BrowseList = ({ name }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(!selected);
      }}
    >
      <ChatView style={{ backgroundColor: DARK_COLOR }}>
        <Text style={{ color: !selected ? "white" : SELECT_COLOR }}>
          {name}
        </Text>
      </ChatView>
    </TouchableOpacity>
  );
};
export default BrowseList;
