import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Album from "./components/Album";
import { ImagePath } from "./utils";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
