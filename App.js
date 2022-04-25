import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ScreenOne from "./screens/ScreenOne";
import ScreenX from "./screens/ScreenX";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="one" component={ScreenOne} />
        <Stack.Screen name="x" component={ScreenX} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
