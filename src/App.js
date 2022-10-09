import React from "react";
import TabNavigation from "./navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Hello from "./navigations/Practice";
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
