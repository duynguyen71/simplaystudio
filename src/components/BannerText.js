import { Text } from "@chakra-ui/react";
import React from "react";

const BannerText = ({
  color = "white",
  text,
  fontSize = "80px",
  bgGradient,
}) => {
  return (
    <Text
      // bgGradient="linear(to-l, #7928CA, #FF0080)"
      // bgClip="text"
      letterSpacing={"5px"}
      lineHeight={[1.1, 0.9]}
      fontWeight={"900"}
      fontSize={["20px", "30px", "60px", "80px"]}
      color={color}
    >
      {text}
    </Text>
  );
};

export default BannerText;
