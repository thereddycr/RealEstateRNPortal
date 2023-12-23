import React from "react";
import { VStack } from "native-base";
import { Pressable } from "react-native";

const PropertyCard = (props) => {
  return (
    <VStack
      bg={props.bg || "white"}
      borderRadius={props.borderRadius || 10}
      margin={props.margin || 10.5}
      width={props.width || 360}
      minH={props.minH || 50}
      elevation={props.elevation || 10}
      gradient={props.gradient}
      shadowColor={"black"}
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={1}
      style={{ ...styles.default, ...props.style }}
    >
      <Pressable onPress={props.onPress}>{props.children}</Pressable>
    </VStack>
  );
};
const styles = {
  default: {},
};
export default PropertyCard;
