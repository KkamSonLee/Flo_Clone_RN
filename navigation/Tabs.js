import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Browse from "../screens/Browse";
import Bucket from "../screens/Bucket";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import {
  BLACK_COLOR,
  SELECT_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../colors";
import Btn from "../components/Btn";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: BLACK_COLOR,
      }}
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: BLACK_COLOR,
        },
        tabBarActiveTintColor: SELECT_COLOR,
        tabBarInactiveTintColor: WHITE_COLOR,
        headerStyle: {
          backgroundColor: BLACK_COLOR,
        },
        headerTitleStyle: {
          color: "white",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: -5,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Btn index={0} width={30} />
            ) : (
              <Btn index={1} width={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="둘러보기"
        component={Browse}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Btn index={2} width={30} />
            ) : (
              <Btn index={3} width={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Btn index={4} width={30} />
            ) : (
              <Btn index={5} width={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="보관함"
        component={Bucket}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Btn index={6} width={30} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
