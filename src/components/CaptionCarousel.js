import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  AspectRatio,
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
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnFocus: false,
};

export const CaptionCarousel = ({ games }) => {
  const navigate = useNavigate();
  const [slider, setSlider] = useState();
  const [gameIndex, setGameIndex] = useState(0);

  const top = useBreakpointValue(["80%", "50%"]);
  const side = useBreakpointValue([0, "10px"]);

  const descriptionColor = useColorModeValue("white", "white");
  const imgBgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      {/*  */}
      <Box
        border={["0", "1px"]}
        borderColor={useColorModeValue("red.100", "gray.700")}
        position={"relative"}
        height={"60vh"}
        overflow={"hidden"}
        borderRadius={["none", "md"]}
      >
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
          <Slider
            afterChange={(index) => {
              setGameIndex(index);
            }}
            {...settings}
            ref={(slider) => setSlider(slider)}
          >
            {games.map((game, index) => {
              const navigateToGame = () => {
                const g = games.find((m, index) => index === gameIndex) || 0;
                return navigate(`/games/${g.path}`);
              };

              return (
                <Box
                  key={index}
                  onClick={navigateToGame}
                  // onClick={navigateToFWPlay}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  // backgroundImage={`${
                  //   process.env.PUBLIC_URL
                  // }/images/6.5_ver2023.4.1 ${index + 1}.png`}
                  backgroundImage={`${PUBLIC_IMAGE_URL}/${game.thumb}`}
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
                        color={descriptionColor}
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      >
                        {game.name}
                      </Heading>
                      <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color={descriptionColor}
                      >
                        {game.shortDescription}
                      </Text>
                      <Box>
                        <Button
                          onClick={navigateToGame}
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
        </AspectRatio>
      </Box>
    </>
  );
};
