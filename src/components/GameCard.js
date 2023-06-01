import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const GameCard = (props) => {
  const { name } = props;

  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/games/${name}`)}
      cursor={"pointer"}
      boxSize={"200"}
      borderRadius={"md"}
      position="relative"
      backgroundImage={`${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 1.png`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="0.3s ease-in-out"
      // overflow={"hidden"}
    >
      {/* Content */}
      <Box
        p="1"
        borderRadius={"md"}
        bg="red.600"
        bottom={-5}
        left={2}
        position={"absolute"}
      >
        <Text>{name}</Text>
      </Box>
    </Box>
  );
};

export default GameCard;
