import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import games from "../data/game";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CaptionCarousel = ({ games }) => {
  const [slider, setSlider] = useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <>
      {/*  */}
      <Box
        position={"relative"}
        height={"60vh"}
        width={"full"}
        overflow={"hidden"}
        borderRadius={"md"}
      >
        {/* CSS files for react-slick */}
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
        <AspectRatio height={"100%"} ratio={"4/5"}>
          {/* <AspectRatio height={"100%"} ratio={"16/9"}> */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {games.map((game, index) => (
              <Box
                key={index}
                // height={"6xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`${
                  process.env.PUBLIC_URL
                }/images/6.5_ver2023.4.1 ${index + 1}.png`}
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
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      {game.name}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                      {game.shortDescription}
                    </Text>
                    <Box>
                      <Button
                        variant={"solid"}
                        color={"white"}
                        bgColor={"blue.300"}
                        size={"md"}
                        fontWeight={"normal"}
                      >
                        View Detail
                      </Button>
                    </Box>
                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </AspectRatio>
      </Box>
    </>
  );
};
