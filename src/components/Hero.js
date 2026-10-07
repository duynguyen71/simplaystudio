import React from "react";
import { Box, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container mt={{ base: "2rem", lg: 0 }}>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Stack as={Box} overflow={"hidden"} textAlign={"center"}>
          <Box p={"1rem"} textAlign={"center"} display={"inline-block"}>
            <Heading as="h1" fontSize={["2xl", "3xl"]} mb={4}>
              Mobile & PC Games by Simplay Studio
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={["3xl", "4xl", "4xl", "5xl"]}
            >
              When making games is our passion, outstanding games are created.
            </Text>
            <Text mt={4}>
              Explore Fireworks Play, Fireworks Show Simulator, Knife Game, and
              Basketball. Discover realistic fireworks simulations and arcade
              games for mobile and PC through our official websites and stores.
            </Text>
          </Box>
        </Stack>
      </motion.div>
    </Container>
  );
};

export default Hero;
