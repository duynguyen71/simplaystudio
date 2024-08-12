import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMAGE_URL } from "../hooks";

const GameCard = (props) => {
  const { name, thumb, path, onClickCustom, dowloadUrl } = props;

  const navigate = useNavigate();

  return (
    <Box
      onClick={() =>
        onClickCustom ? onClickCustom() : window.open(dowloadUrl, "_blank")
      }
      cursor={"pointer"}
      p={"1.5rem"}
      transition="0.3s ease-in-out"
    >
      <Image
        border={"1px solid #eaeaea"}
        borderRadius={"25%"}
        height={"auto"}
        width={["17rem", "23rem", "25rem"]}
        src={`${PUBLIC_IMAGE_URL}/${thumb}`}
        alt={name}
      />
    </Box>
  );
};

export default GameCard;
