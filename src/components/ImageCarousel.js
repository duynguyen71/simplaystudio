import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMAGE_URL } from "../hooks";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnFocus: false,
};

export const ImageCarousel = ({ games }) => {
  const navigate = useNavigate();
  const [slider, setSlider] = useState();

  const top = useBreakpointValue(["80%", "50%"]);
  const side = useBreakpointValue([0, "10px"]);

  const imgBgColor = useColorModeValue("gray.200", "gray.800");
  const navigateToFWPlay = () => navigate(`/games/${games[0].path}`);
  return (
    <>
      <Box position={"relative"} overflow={"hidden"} borderRadius={"md"}>
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider
          afterChange={(index) => {}}
          {...settings}
          ref={(slider) => setSlider(slider)}
        >
          {games[0].images.map((img, index) => {
            return (
              <Box
                key={index}
                onClick={navigateToFWPlay}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage={`${PUBLIC_IMAGE_URL}/${img}`}
                bgColor={imgBgColor}
              >
                <Container
                  size="container.lg"
                  height="600px"
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
                    <Heading
                      // color={descriptionColor}
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    >
                      {games[0].name}
                    </Heading>
                    <Text
                      fontSize={{ base: "md", lg: "lg" }}
                      // color={'white'}
                    >
                      {games[0].shortDescription}
                    </Text>
                    <Box>
                      <Button
                        onClick={navigateToFWPlay}
                        variant={"solid"}
                        color={"white"}
                        bgColor={"red.400"}
                        size={"md"}
                        fontWeight={"normal"}
                      >
                        View Detail
                      </Button>
                    </Box>
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
