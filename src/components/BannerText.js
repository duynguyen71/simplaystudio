import { Text } from "@chakra-ui/react";
import React from "react";

const BannerText = ({
  color = "white",
  text,
  fontSize = "80px",
  bgGradient,
  isStrokeStyle,
}) => {
  const useStrokeStyle = {
    WebkitTextStroke: `1px ${color}`,
    color: "transparent",
  };
  return (
    <Text
      alignSelf={"center"}
      textAlign={"center"}
      style={isStrokeStyle && useStrokeStyle}
      letterSpacing={"5px"}
      lineHeight={[1.1, 0.9]}
      fontWeight={"900"}
      fontSize={["40px", "60px", "80px"]}
      color={color}
    >
      {text}
    </Text>
  );
};

export default BannerText;
