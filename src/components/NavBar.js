import { Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function WithAction() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        cursor={"pointer"}
        position={"sticky"}
        top={5}
        borderRadius={"full"}
        px={[".5em"]}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        alignSelf={"center"}
        zIndex={1000}
        width={["30vh"]}
        bg={useColorModeValue("gray.100", "gray.900")}
        mx={4}
      >
        <Flex
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
          py={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            cursor={"pointer"}
            display={"inline-block"}
            fontSize={["md", "md", "xl", "2xl"]}
            fontWeight={"bold"}
          >
            Simplay Studio
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
