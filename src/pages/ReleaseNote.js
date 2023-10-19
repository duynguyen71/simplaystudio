import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { updates } from "../data/update";
// https://www.textfixer.com/html/convert-text-html.php

const ReleaseVersionContainer = ({ title, listItem }) => {
  return (
    <Box boxShadow={"md"} m={4} my={8} px={8} py={4} borderRadius={"md"}>
      <Heading
        m={0}
        p={1}
        letterSpacing={1}
        color={"red.400"}
        as={"h1"}
        fontSize={"lg"}
      >
        {title}
      </Heading>
      {listItem.map((item, index) => (
        <>
          <Text fontWeight={"normal"} p={1}>
            {"- "}
            {item}
          </Text>
        </>
      ))}
    </Box>
  );
};

const ReleaseNote = () => {
  return (
    <>
      {updates.map((update, index) => (
        <ReleaseVersionContainer
          title={update.version}
          listItem={update.changes}
        />
      ))}
    </>
  );
};

export default ReleaseNote;
