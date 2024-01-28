import React from "react";
import { Box } from "@chakra-ui/react";
const VideoContainer = (s, onLoadEnd, onLoadStart, onError) => {
  return (
    <Box minH={"100vh"} maxW={"100%"} borderRadius={"md"}>
      <video loop controls={false} autoPlay muted>
        <source src={s} type="video/mp4" />
      </video>
    </Box>
  );
};

export default VideoContainer;