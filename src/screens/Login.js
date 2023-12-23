import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  HStack,
  Input,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";
import {
  Ionicons,
  Octicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "data");
    await AsyncStorage.setItem("@fracspace-user", JSON.stringify(data));
    navigation.navigate("PropertyDetails");
    reset();
  };

  return (
    <Stack flex={1} bg={"white"} safeAreaTop>
      <VStack p={8}>
        <Text fontSize={25} color={"#686868"}>
          Hi
        </Text>
        <Text fontSize={30} color={"#686868"}>
          Welcome To
        </Text>
        <Text fontSize={22} fontWeight={800} color={"blue.900"}>
          FRACSPACE
        </Text>
        <VStack space={5}>
          <Text
            style={{
              position: "absolute",
              top: 10,
              left: 15,
              backgroundColor: "white",
              zIndex: 1,
              paddingHorizontal: 5,
            }}
            fontSize={13}
            fontWeight={500}
          >
            Your name
          </Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your name.",
              },
            }}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                placeholder="Enter your name"
                borderRadius={8}
                borderWidth={errors.name ? 1.5 : 1}
                borderColor={errors.name ? "red.400" : "#686868"}
                fontSize={13}
                letterSpacing={1}
                _focus={{
                  backgroundColor: "transparent",
                  borderColor: "#686868",
                }}
                InputLeftElement={
                  <Octicons
                    name="person"
                    size={15}
                    color={errors.name ? "red" : "#686868"}
                    style={{
                      marginLeft: 17,
                    }}
                  />
                }
              />
            )}
          />

          <Text
            style={{
              position: "absolute",
              top: 98,
              left: 15,
              backgroundColor: "white",
              zIndex: 1,
              paddingHorizontal: 5,
            }}
            fontSize={13}
            fontWeight={500}
          >
            Password
          </Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your password.",
              },
            }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                fontSize={show ? 22 : 13}
                letterSpacing={show ? 3 : 1}
                type={!show ? "text" : "password"}
                placeholder="Enter your password"
                borderRadius={8}
                borderWidth={errors.password ? 1.5 : 1}
                borderColor={errors.password ? "red.400" : "#686868"}
                _focus={{
                  backgroundColor: "transparent",
                  borderColor: "#686868",
                }}
                InputLeftElement={
                  <Ionicons
                    name="key-outline"
                    size={15}
                    color={errors.password ? "red" : "#686868"}
                    style={{
                      marginLeft: 17,
                    }}
                  />
                }
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)} mr={3}>
                    {show ? (
                      <Ionicons
                        name="ios-eye-outline"
                        size={20}
                        color="black"
                      />
                    ) : (
                      <Ionicons
                        name="ios-eye-off-outline"
                        size={20}
                        color="black"
                      />
                    )}
                  </Pressable>
                }
              />
            )}
          />

          <HStack justifyContent={"space-between"}>
            <HStack space={2}>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: false,
                  },
                }}
                name="remember"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Checkbox
                    aria-label="remember"
                    value={value}
                    onChange={(value) => {
                      onChange(value);
                    }}
                    borderRadius={"full"}
                    colorScheme={"indigo"}
                  />
                )}
              />
              <Text fontSize={13} color={"#686868"} fontWeight={400}>
                Remember me
              </Text>
            </HStack>
            <Pressable
              onPress={() => {
                alert("Forgot password?");
              }}
            >
              <Text>Forgot password?</Text>
            </Pressable>
          </HStack>
        </VStack>

        <Button
          onPress={handleSubmit(onSubmit)}
          bg={"darkBlue.800"}
          borderRadius={8}
          height={50}
          marginTop={50}
        >
          Log in
        </Button>
        <HStack mt={8} justifyContent={"space-between"}>
          <Divider width={"35%"} alignSelf={"center"} />
          <Text
            fontSize={11}
            color={"#686868"}
            bg={"white"}
            alignSelf={"center"}
            justifyContent={"center"}
          >
            Or sign up with
          </Text>
          <Divider width={"35%"} alignSelf={"center"} />
        </HStack>
        <HStack justifyContent={"space-between"} mt={8}>
          <Pressable
            onPress={() => {
              alert("Google");
            }}
            bg={"lightBlue.50"}
            px={5}
            py={4}
            borderRadius={8}
          >
            <AntDesign name="google" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() => {
              alert("Facebook");
            }}
            bg={"lightBlue.50"}
            px={5}
            py={4}
            borderRadius={8}
          >
            <FontAwesome5 name="facebook" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() => {
              alert("Apple");
            }}
            bg={"lightBlue.50"}
            px={5}
            py={4}
            borderRadius={8}
          >
            <MaterialCommunityIcons name="apple" size={24} color="black" />
          </Pressable>
        </HStack>
        <Pressable
          mt={20}
          alignSelf={"center"}
          onPress={() => {
            alert("Sign up");
          }}
        >
          <HStack space={1}>
            <Text>Don't have an account yet?</Text>
            <Text fontSize={13} fontWeight={600} color={"darkBlue.800"}>
              Sign up
            </Text>
          </HStack>
        </Pressable>
      </VStack>
    </Stack>
  );
};
export default Login;
