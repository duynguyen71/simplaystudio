import React from "react";
import { Box } from "@chakra-ui/react";
const VideoContainer = (s, onLoadEnd, onLoadStart, onError) => {
  return (
    <Box minH={"100vh"} maxW={"100%"} borderRadius={"md"}>
      <video controls={false} autoplay loop muted playsinline>
        <source src={s} type="video/mp4" />
      </video>
    </Box>
  );
};

export default VideoContainer;
