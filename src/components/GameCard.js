import React from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Stack,
  Heading,
  Image,
  CardFooter,
  Divider,
  ButtonGroup,
  Box,
  Container,
} from "@chakra-ui/react";
const GameCard = (props) => {
  const { name, thumb } = props;

  return (
    <Box
      boxSize={"300"}
      borderRadius={"md"}
      position="relative"
      backgroundImage={`${process.env.PUBLIC_URL}/images/6.5_ver2023.4.1 1.png`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      {/* Content */}
      <Box
        p="1"
        borderRadius={"md"}
        bg="purple.500"
        bottom={-5}
        left={10}
        position={"absolute"}
      >
        <Text>{name}</Text>
      </Box>
    </Box>
  );
};

export default GameCard;
