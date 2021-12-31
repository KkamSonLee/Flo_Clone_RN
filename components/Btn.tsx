import React from "react";
import styled from "styled-components/native";
import { ImagePath, TabbarImgPath } from "../utils";

const Image = styled.Image`
  border-radius: 5px;
`;

interface AlbumProps {
  index: number;
  width: number;
}
const Btn: React.FC<AlbumProps> = ({ index, width }) => (
  <Image
    source={TabbarImgPath[index].tabSrc}
    style={{ width: width, height: width }}
  />
);
export default Btn;
