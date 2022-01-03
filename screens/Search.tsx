import React, { useState } from "react";
import { View, TextInput, FlatList } from "react-native";
import { DARK_COLOR, GRAY_COLOR, WHITE_COLOR } from "../colors";
import styled from "styled-components/native";
import PlayerControl from "../components/PlayerControl";
const chartData = [
  { data: "이루리", id: 1 },
  { data: "아이유", id: 2 },
  { data: "옷소매 붉은 끝동 OST", id: 3 },
  { data: "MC몽", id: 4 },
  { data: "Dreams Come True", id: 5 },
  { data: "사랑은 늘 도망가", id: 6 },
  { data: "듣기만 해도 성공하는 음악", id: 7 },
  { data: "토요태", id: 8 },
  { data: "회전목마", id: 9 },
  { data: "성시경", id: 10 },
  { data: "이선희", id: 11 },
  { data: "에스파", id: 12 },
  { data: "그 해 우리는 OST", id: 13 },
  { data: "싱어게인", id: 14 },
  { data: "비오", id: 15 },
  { data: "리무진", id: 16 },
  { data: "방탄소년단", id: 17 },
  { data: "임영웅", id: 18 },
  { data: "취중고백", id: 19 },
  { data: "블랙핑크", id: 20 },
];

const Container = styled.View`
  flex: 1;
`;
const TitleText = styled.Text`
  flex: 1;
  color: white;
  font-size: 17px;
  margin-left: 30px;
`;
const DayText = styled.Text`
  flex: 1;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;
const Column = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`;
const HSeperator = styled.View`
  height: 10px;
`;
const RankText = styled.Text`
  flex: 1;
  font-size: 13px;
  margin-left: 10px;
  color: rgba(62, 62, 255, 1);
`;
const NameText = styled.Text`
  flex: 8;
  color: white;
  font-size: 15px;
`;
const Search = () => {
  const [title, setTitle] = useState("");
  const [titleValid, setTitleValid] = useState(false);
  const titleChangeHandler = (text) => {
    if (text.trim().length === 0) {
      setTitleValid(false);
    } else {
      setTitleValid(true);
    }
    setTitle(text);
  };
  return (
    <>
      <Container>
        <TextInput
          style={{
            height: 40,
            color: "white",
            backgroundColor: DARK_COLOR,
            margin: 20,
          }}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="🔍검색어를 입력하세요"
          placeholderTextColor={GRAY_COLOR}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <TitleText>급상승 검색어</TitleText>
            <DayText>2022.01.02 01:00기준</DayText>
          </View>
          <FlatList
            data={chartData}
            keyExtractor={(item) => item.id + ""}
            ItemSeparatorComponent={HSeperator}
            style={{
              flex: 2,
              margin: 10,
            }}
            renderItem={({ item }) => (
              <Column>
                <RankText>{item.id}</RankText>
                <NameText>{item.data}</NameText>
              </Column>
            )}
          />
        </View>
      </Container>

      <PlayerControl />
    </>
  );
};
export default Search;
