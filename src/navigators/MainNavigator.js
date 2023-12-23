import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../screens/Login";
import ViewMore from "../screens/ViewMore";
import PropertyDetails from "../screens/PropertyDetails";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const userData = await AsyncStorage.getItem("@fracspace-user");
      if (userData) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking user login status:", error);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
        initialRouteName={
          isUserLoggedIn ? "PropertyDetails" : "Login"
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
        <Stack.Screen name="ViewMore" component={ViewMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
