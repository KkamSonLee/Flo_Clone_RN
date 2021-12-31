import React from "react";
import styled from "styled-components/native";
import { ImagePath } from "../utils";

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
interface SmallImageProps {
  index: number;
}

const SmallImage: React.FC<SmallImageProps> = ({ index }) => (
  <Image source={ImagePath[index].src} />
);

export default SmallImage;
