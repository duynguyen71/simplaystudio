import React, { useEffect } from "react";
import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingText from "./TypeWriter";

const Hero = ({ typeIsDone, setTypeIsDone }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 0.5,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.set({ x: -200 });
      animation2.set({ x: 200 });
    }
  }, [inView, animation, animation2]);

  return (
    <Container mt={["10vh", "15vh"]} ref={ref}>
      <Stack as={Box} overflow={"hidden"} textAlign={"center"}>
        <Box p={"1rem"} textAlign={"center"} display={"inline-block"}>
          <TypingText
            text={
              "When making games is our passion, outstanding games are created."
            }
            typeIsDone={typeIsDone}
            setTypeIsDone={setTypeIsDone}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={["3xl", "4xl", "4xl", "5xl"]}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
