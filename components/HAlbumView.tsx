import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import HAlbum from "../components/HAlbum";
const TodayScroll = styled.FlatList`
  margin-top: 20px;
`;
const Container = styled.View`
  flex: 1;
`;
const VSeperator = styled.View`
  width: 20px;
`;

const HAlbumView = ({ itemPath, title, isSub }) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "white",
          marginLeft: 30,
          marginTop: 20,
        }}
      >
        {title}
      </Text>
      <TodayScroll
        horizontal
        data={itemPath}
        keyExtractor={(item) => item.id + ""}
        ItemSeparatorComponent={VSeperator}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>
          isSub ? (
            <HAlbum index={item.id - 1} mainTitle="sad" subTitle="das" />
          ) : (
            <HAlbum index={item.id - 1} mainTitle="sad" subTitle="" />
          )
        }
      />
    </Container>
  );
};
export default HAlbumView;
