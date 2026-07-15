import { Box, Image } from "@chakra-ui/react";
import { PUBLIC_IMAGE_URL } from "../hooks";

const GameCard = (props) => {
  const { name, thumb, onClickCustom, downloadUrl } = props;

  const openGame = () => {
    if (onClickCustom) {
      onClickCustom();
      return;
    }

    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      as="button"
      type="button"
      aria-label={`Open ${name}`}
      onClick={openGame}
      cursor={"pointer"}
      p={"1.5rem"}
      transition="0.3s ease-in-out"
      width={"100%"}
      maxW={"23rem"}
      justifySelf={"center"}
    >
      <Image
        border={"1px solid #eaeaea"}
        borderRadius={"25%"}
        aspectRatio={1}
        objectFit={"cover"}
        width={"100%"}
        src={`${PUBLIC_IMAGE_URL}/${thumb}`}
        alt={name}
      />
    </Box>
  );
};

export default GameCard;
