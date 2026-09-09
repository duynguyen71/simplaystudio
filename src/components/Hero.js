import React from "react";
import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import TypingText from "./TypeWriter";

const Hero = ({ typeIsDone, setTypeIsDone }) => {
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
            <TypingText
              text={
                "When making games is our passion, outstanding games are created."
              }
              typeIsDone={typeIsDone}
              setTypeIsDone={setTypeIsDone}
              typingSpeed={20}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={["3xl", "4xl", "4xl", "5xl"]}
            />
          </Box>
        </Stack>
      </motion.div>
    </Container>
  );
};

export default Hero;
