import React from "react";
import {
  Box,
  useBreakpointValue,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { PUBLIC_IMAGE_URL } from "../hooks";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnFocus: false,
};

export const ModalCarosel = ({ images }) => {
  const top = useBreakpointValue(["80%", "50%"]);

  const imgBgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <Box position={"relative"} overflow={"hidden"} borderRadius={"md"}>
        <Slider
          afterChange={(index) => {}}
          {...settings}
          // ref={(slider) => setSlider(slider)}
        >
          {images.map((img, index) => {
            return (
              <Box
                key={index}
                onClick={() => {}}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage={`${PUBLIC_IMAGE_URL}/${img}`}
                bgColor={imgBgColor}
              >
                <Container
                  size="container.lg"
                  height="300px"
                  position="relative"
                >
                  <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"lg"}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)"
                  >
                    <Box></Box>
                  </Stack>
                </Container>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
