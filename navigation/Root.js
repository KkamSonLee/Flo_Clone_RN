import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";
import AlbumPlayer from "../screens/AlbumPlayer";
import HAlbumView from "../components/HAlbumView";
import AlbumView from "../screens/AlbumView";
import { Text } from "react-native";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
      <Nav.Screen name="AlbumPlayer" component={AlbumPlayer} />
      <Nav.Screen name="HAlbumView" component={HAlbumView} />
      <Nav.Screen name="AlbumView" component={AlbumView} />
    </Nav.Navigator>
  );
};

/*  */
export default Root;
