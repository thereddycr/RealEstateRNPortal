import React, { useState } from "react";
import { Pressable, Dimensions, Image, Alert } from "react-native";
import { Text, HStack, VStack, Stack, Button } from "native-base";
import { TabView, TabBar } from "react-native-tab-view";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PropertyCard from "../../components/PropertyCard";

const PropertyDetails = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    { key: "overview", title: "Overview" },
    { key: "bookings", title: "Bookings" },
    { key: "guestbook", title: "Guest Book" },
  ]);

  const initialLayout = {
    height: 0,
    width: Dimensions.get("window").width,
  };

  const renderScene = ({ route }) => {
    if (Math.abs(index - routes.indexOf(route)) > 2) {
      return <View />;
    }

    switch (route.key) {
      case "overview":
        return (
          <VStack alignSelf={"center"}>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ marginTop: 25, justifyContent: "center" }}
              bg={"#F3F3F3"}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text>Date of purchase</Text>
                <Text
                  alignSelf={"center"}
                  fontWeight={600}
                  color={"darkBlue.800"}
                >
                  15-03-2023
                </Text>
              </HStack>
            </PropertyCard>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ justifyContent: "center" }}
              bg={"#F3F3F3"}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text>Fractions</Text>
                <Text
                  alignSelf={"center"}
                  fontWeight={600}
                  color={"darkBlue.800"}
                >
                  2/8
                </Text>
              </HStack>
            </PropertyCard>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ justifyContent: "center" }}
              bg={"#F3F3F3"}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text>Invested Amount</Text>
                <Text
                  alignSelf={"center"}
                  fontWeight={600}
                  color={"darkBlue.800"}
                >
                  25 Lakhs
                </Text>
              </HStack>
            </PropertyCard>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ justifyContent: "center" }}
              bg={"#F3F3F3"}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text alignSelf={"center"}>Current Value (In 2years)</Text>
                <Text
                  alignSelf={"center"}
                  fontWeight={600}
                  color={"green.800"}
                  fontSize={16}
                >
                  27 Lakhs
                </Text>
              </HStack>
            </PropertyCard>
            <VStack
              borderTopWidth={1}
              borderBottomWidth={1}
              borderColor={"#E5E5E5"}
              height={50}
              justifyContent={"center"}
              marginTop={5}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text fontWeight={600}>Ledger</Text>
                <HStack space={1}>
                  <Text alignSelf={"center"}>View</Text>
                  <Ionicons
                    name="arrow-forward-sharp"
                    size={24}
                    color="black"
                    style={{ alignSelf: "center" }}
                  />
                </HStack>
              </HStack>
            </VStack>

            <Button
              onPress={() => {
                alert("sell your property");
              }}
              style={{
                width: 220,
                height: 50,
                alignSelf: "center",
                marginTop: 85,
                backgroundColor: "#000033",
                borderRadius: 50,
              }}
            >
              <Text color={"white"}>SELL YOUR PROPERTY</Text>
            </Button>
          </VStack>
        );
      case "bookings":
        return (
          <VStack alignSelf={"center"}>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ marginTop: 25, justifyContent: "center" }}
            >
              <HStack justifyContent={"space-between"} paddingX={5}>
                <Text>Complimentary Stay</Text>
                <Text
                  alignSelf={"center"}
                  fontWeight={600}
                  style={{
                    backgroundColor: "#90d494",
                    borderRadius: 20,
                    color: "green",
                  }}
                  paddingX={2}
                  paddingY={0.5}
                >
                  7 Days Left
                </Text>
              </HStack>
            </PropertyCard>
            <Text
              paddingX={5}
              color={"#686868"}
              fontWeight={"bold"}
              marginTop={5}
            >
              Previous Bookings
            </Text>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ paddingVertical: 15 }}
            >
              <VStack space={5}>
                <HStack justifyContent={"space-between"} paddingX={5}>
                  <Text>Date of Booking</Text>
                  <Text fontWeight={600} alignSelf={"center"}>
                    21-May-2022
                  </Text>
                </HStack>
                <HStack justifyContent={"space-between"} paddingX={5}>
                  <Text>Period of Stay</Text>
                  <Text
                    textAlign={"right"}
                    backgroundColor={"red"}
                    fontWeight={600}
                  >
                    01-Jun-2022 {"\n"}to 07-Jun-2022
                  </Text>
                </HStack>
              </VStack>
            </PropertyCard>
            <PropertyCard
              borderRadius={12}
              width={350}
              style={{ paddingVertical: 15 }}
            >
              <VStack space={5}>
                <HStack justifyContent={"space-between"} paddingX={5}>
                  <Text>Date of Booking</Text>
                  <Text fontWeight={600} alignSelf={"center"}>
                    21-May-2022
                  </Text>
                </HStack>
                <HStack justifyContent={"space-between"} paddingX={5}>
                  <Text>Period of Stay</Text>
                  <Text
                    textAlign={"right"}
                    backgroundColor={"red"}
                    fontWeight={600}
                  >
                    01-Jun-2021 {"\n"}to 07-Jun-2021
                  </Text>
                </HStack>
              </VStack>
            </PropertyCard>

            <Button
              onPress={() => {
                alert("book your holidays");
              }}
              style={{
                width: 220,
                height: 50,
                alignSelf: "center",
                marginTop: 60,
                backgroundColor: "#000033",
                borderRadius: 50,
              }}
            >
              <Text color={"white"}>BOOK YOUR HOLIDAYS</Text>
            </Button>
          </VStack>
        );
      case "guestbook":
        return (
          <>
            <Text alignSelf={"center"} marginTop={200}>
              no data found!
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <VStack flex={1} safeAreaTop>
      <HStack paddingX={5} justifyContent={"space-between"}>
        <Pressable
          style={{
            backgroundColor: "#e6e6ff",
            width: 50,
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
          }}
          onPress={() => {
            Alert.alert(
              "Log Out?",
              "Are you sure you want to logout?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: async () => {
                    await AsyncStorage.removeItem("@fracspace-user");
                    navigation.navigate("Login");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </Pressable>
        <Text fontWeight={600} alignSelf={"center"}>
          Properties Details
        </Text>
        <Pressable
          onPress={() => {
            alert("share");
          }}
          style={{ alignSelf: "center" }}
        >
          <Feather name="share-2" size={24} color="grey" />
        </Pressable>
      </HStack>
      <PropertyCard
        style={{ alignSelf: "center", marginTop: 30 }}
        borderRadius={20}
        width={350}
      >
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Stack px={3} py={3}>
              <Image
                alt="property image"
                source={require("../../assets/Asset2.png")}
                style={{
                  borderRadius: 10,
                  width: 75,
                  height: 75,
                }}
              />
            </Stack>
            <VStack justifyContent={"center"} space={1}>
              <Text fontSize={16}>Dahlia Place</Text>
              <Text color={"grey"} fontSize={11}>
                <SimpleLineIcons name="location-pin" size={11} color="grey" />{" "}
                Fort kochi
              </Text>
            </VStack>
          </HStack>
          <Pressable
            onPress={() => {
              navigation.navigate("ViewMore");
            }}
            justifyContent={"center"}
          >
            <HStack space={1} px={5}>
              <Text alignSelf={"center"}>View</Text>
              <Ionicons
                name="arrow-forward-sharp"
                size={24}
                color="black"
                style={{ alignSelf: "center" }}
              />
            </HStack>
          </Pressable>
        </HStack>
      </PropertyCard>

      <TabView
        style={{ paddingHorizontal: 2, marginTop: 15 }}
        renderTabBar={(props) => {
          return (
            <TabBar
              {...props}
              renderLabel={({ route, focused }) => (
                <Text
                  style={{
                    color: focused ? "#686868" : "#919191",
                    fontWeight: 600,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {route.title}
                </Text>
              )}
              indicatorStyle={{
                backgroundColor: "#686868",
              }}
              style={{
                backgroundColor: "white",
              }}
            />
          );
        }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled={true}
      />
    </VStack>
  );
};

export default PropertyDetails;
