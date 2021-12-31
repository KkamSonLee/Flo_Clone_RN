import React from "react";
import styled from "styled-components/native";
import { ImagePath } from "../utils";

const Image = styled.Image`
  width: 160px;
  height: 160px;
`;
interface AlbumProps {
  index: number;
}

const Album: React.FC<AlbumProps> = ({ index }) => (
  <Image source={ImagePath[index].src} />
);

export default Album;
