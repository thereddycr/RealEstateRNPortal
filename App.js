import React from "react";
import { NativeBaseProvider } from "native-base";
import MainNavigator from "./src/navigators/MainNavigator";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainNavigator />
    </NativeBaseProvider>
  );
}
