import React, { useState } from "react";
import {
  HStack,
  Pressable,
  Stack,
  Text,
  VStack,
  ScrollView,
} from "native-base";
import { Dimensions, Image } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ViewMore = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    { key: "overview", title: "Overview" },
    { key: "society", title: "Society" },
    { key: "pricetrends", title: "Price Trends" },
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
          <ScrollView>
            <VStack mt={5} space={5}>
              <VStack space={1}>
                <Text fontSize={15} fontWeight={600}>
                  Attributes
                </Text>
                <HStack justifyContent={"space-between"}>
                  <HStack space={1}>
                    <Text>4</Text>
                    <Ionicons
                      name="bed-outline"
                      size={16}
                      color="grey"
                      style={{
                        alignSelf: "center",
                      }}
                    />
                  </HStack>
                  <HStack space={1}>
                    <Text>4</Text>
                    <FontAwesome
                      name="bath"
                      size={13}
                      color="grey"
                      style={{
                        alignSelf: "center",
                      }}
                    />
                  </HStack>
                  <Text>1200 sq ft</Text>
                  <Text>Built in 1999</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <Text fontSize={15} fontWeight={600}>
                  About this home
                </Text>
                <Text fontSize={14} fontWeight={400}>
                  Entertainers will feel right at home at Dahlia Place, a
                  sophisticated 4-story townhouse. With 3,130 square feet
                  indoors and nearly.
                </Text>
              </VStack>
              <VStack space={1}>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={15} fontWeight={600}>
                    Distinctive Amenities
                  </Text>
                  <Pressable
                    onPress={() => {
                      alert("View More");
                    }}
                  >
                    <Text fontSize={15} fontWeight={500} color={"#000033"}>
                      View More
                    </Text>
                  </Pressable>
                </HStack>
                <HStack mt={4} justifyContent={"space-between"} width={"80%"}>
                  <VStack space={4}>
                    <Text fontSize={14} fontWeight={400}>
                      360 degree views
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Elevator
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Patio
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      2-car garage
                    </Text>
                  </VStack>
                  <VStack space={4}>
                    <Text fontSize={14} fontWeight={400}>
                      Ocean views
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Deck
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Fireplace
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      New co
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </ScrollView>
        );
      case "society":
        return (
          <>
            <Text alignSelf={"center"} marginTop={120}>
              no data found!
            </Text>
          </>
        );
      case "pricetrends":
        return (
          <>
            <Text alignSelf={"center"} marginTop={120}>
              no data found!
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Stack flex={1} bg={"white"} safeAreaTop>
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
            navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </Pressable>
        <VStack justifyContent={"center"}>
          <Text
            fontWeight={600}
            alignSelf={"center"}
            fontSize={18}
            color={"#555555"}
          >
            Dahlia Place
          </Text>
          <HStack>
            <Text fontWeight={800} alignSelf={"center"} color={"darkBlue.800"}>
              INR 15,18,000
            </Text>
            <Text
              justifyContent={"flex-end"}
              alignSelf={"flex-end"}
              fontSize={9}
              fontWeight={400}
            >
              -1/8 Ownership
            </Text>
          </HStack>
        </VStack>
        <HStack space={3}>
          <Pressable
            onPress={() => {
              alert("share");
            }}
            style={{ alignSelf: "center" }}
          >
            <Feather
              name="share-2"
              size={24}
              color="grey"
              style={{ alignSelf: "center" }}
            />
          </Pressable>
          <Ionicons
            name="heart-outline"
            size={22}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </HStack>
      </HStack>
      <VStack p={8} flex={1}>
        <HStack height={245} space={1}>
          <VStack space={1}>
            <Image
              alt="property photo -1"
              source={require("../../assets/Property1.jpg")}
              style={{
                borderRadius: 10,
                width: 120,
                height: 120,
              }}
            />
            <Image
              alt="property photo -2"
              source={require("../../assets/Property2.jpg")}
              style={{
                borderRadius: 10,
                width: 120,
                height: 120,
              }}
            />
          </VStack>
          <Image
            alt="property photo -3"
            source={require("../../assets/Asset2.png")}
            style={{
              borderRadius: 10,
              width: 200,
              height: 245,
            }}
          />
        </HStack>
        <TabView
          style={{ marginTop: 15 }}
          renderTabBar={(props) => {
            return (
              <TabBar
                {...props}
                renderLabel={({ route, focused }) => (
                  <Text
                    style={{
                      color: focused ? "#686868" : "#919191",
                      fontWeight: 600,
                      fontSize: 12,
                      width: 75,
                    }}
                  >
                    {route.title}
                  </Text>
                )}
                tabStyle={{
                  alignSelf: "flex-start",
                }}
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
      <HStack
        justifyContent={"space-between"}
        height={60}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#000033",
          opacity: 0.6,
        }}
        px={10}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignSelf: "center",
            gap: 4,
          }}
          onPress={() => {
            alert("CALL");
          }}
        >
          <Feather
            name="phone"
            size={16}
            color="white"
            style={{
              alignSelf: "center",
            }}
          />
          <Text fontSize={16} fontWeight={600} color={"white"}>
            CALL
          </Text>
        </Pressable>
        <Pressable
          justifyContent={"center"}
          style={{
            flexDirection: "row",
            alignSelf: "center",
            gap: 4,
          }}
          onPress={() => {
            alert("Contact");
          }}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={16}
            color="white"
            style={{
              alignSelf: "center",
            }}
          />
          <Text fontSize={16} fontWeight={600} color={"white"}>
            Contact
          </Text>
        </Pressable>
        <Pressable
          justifyContent={"center"}
          backgroundColor={"#000033"}
          borderRadius={"full"}
          px={3}
          py={2}
          style={{
            flexDirection: "row",
            alignSelf: "center",
            gap: 4,
          }}
          onPress={() => {
            alert("TOUR");
          }}
        >
          <MaterialCommunityIcons
            name="calendar-check-outline"
            size={16}
            color="white"
            style={{
              alignSelf: "center",
            }}
          />
          <Text fontSize={16} fontWeight={600} color={"white"}>
            TOUR
          </Text>
        </Pressable>
      </HStack>
    </Stack>
  );
};
export default ViewMore;
