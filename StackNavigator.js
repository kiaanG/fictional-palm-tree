import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Bowling from "./screens/Bowling";
import Fielding from "./screens/Fielding";
import Batting from "./screens/Batting";
import InfoHome from "./screens/InfoHome"
import BowlingLegend from "./screens/BowlingLegend";
import AllRounder from "./screens/All-rounderLegend";
import BattingLegend from "./screens/BattingLegend";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InfoHome" component={InfoHome} />
      <Stack.Screen name="Bowling" component={Bowling} />
      <Stack.Screen name="Fielding" component={Fielding} />
      <Stack.Screen name="Batting" component={Batting} />
      <Stack.Screen name="BowlingLegend" component={BowlingLegend} />
      <Stack.Screen name="AllRounder" component={AllRounder} />
      <Stack.Screen name="BattingLegend" component={BattingLegend} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
