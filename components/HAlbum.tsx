import React from "react";
import styled from "styled-components/native";
import Album from "./Album";

const View = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const SubTitle = styled.Text`
  color: white;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

interface HAlbumProps {
  index: number;
  mainTitle: string;
  subTitle: string | null;
}
const HAlbum: React.FC<HAlbumProps> = ({ index, mainTitle, subTitle }) => (
  <View>
    <Album index={index} />
    <Title>{mainTitle}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </View>
);
export default HAlbum;
