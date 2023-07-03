import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const ImageCarousel = () => {
  const [slider, setSlider] = useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
      width={"full"}
      height={"50vh"}
      overflow={"hidden"}
      alignItems={"center"}
      borderRadius={"md"}
    >
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
      <AspectRatio height={"100%"} ratio={"16/9"}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
            <Image
              alt="image"
              key={value}
              src={`${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 ${
                value + 1
              }.png`}
              objectFit="cover"
            />
          ))}
          {/* </Box> */}
        </Slider>
      </AspectRatio>
    </Box>
  );
};

export default ImageCarousel;
