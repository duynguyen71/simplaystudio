import { Text } from "@chakra-ui/react";
import React from "react";

const BannerText = ({ color = "white", text, fontSize = "80px" }) => {
  return (
    <Text
      letterSpacing={"5px"}
      lineHeight={[1.1, 0.9]}
      fontWeight={"900"}
      // fontSize={fontSize}
      fontSize={["30px", "80px"]}
      color={color}
    >
      {text}
    </Text>
  );
};

export default BannerText;
