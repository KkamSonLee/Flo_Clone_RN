import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { ImagePath, SlideImg } from "../utils";
import Swiper from "react-native-swiper";
import HAlbumView from "../components/HAlbumView";
import ShareIcon from "../components/ShareIcon";
import MainSlide from "../components/MainSlide";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Container = styled.View`
  flex: 1;
`;
const SlideContinaer = styled.View`
  flex: 1;
`;
const titleText = styled.Text``;

const VSeperator = styled.View`
  width: 20px;
`;

const Stack = createNativeStackNavigator();
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const Home = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Container>
            <Container
              style={{
                height: SCREEN_HEIGHT / 1.8,
              }}
            >
              <MainSlide />
            </Container>
            <HAlbumView
              itemPath={ImagePath}
              title={"오늘 발매 음악 >"}
              isSub={true}
            />
            <Swiper
              horizontal
              loop
              autoplay
              autoplayTimeout={3.5}
              showsButtons={false}
              showsPagination={false}
              containerStyle={{
                marginBottom: 30,
                width: "100%",
                height: SCREEN_HEIGHT / 7,
              }}
            >
              <TouchableOpacity
                onPress={() => navigate("Stack", { screen: "One" })}
              >
                <Image
                  source={SlideImg[0].src}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Image
                source={SlideImg[1].src}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </Swiper>
            <TouchableOpacity onPress={() => navigate("AlbumPlayer")}>
              <HAlbumView
                itemPath={ImagePath}
                title={"밤에 듣기 좋은 음악"}
                isSub={false}
              />
            </TouchableOpacity>
          </Container>
          <View>
            <ShareIcon />
          </View>
        </>
      }
      data={ImagePath}
      keyExtractor={(item) => item.id + ""}
      ItemSeparatorComponent={VSeperator}
    />
  );
};
export default Home;
