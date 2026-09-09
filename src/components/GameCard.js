import { Box, Image, Tooltip } from "@chakra-ui/react";
import { PUBLIC_IMAGE_URL } from "../hooks";

const GameCard = (props) => {
  const {
    name,
    thumb,
    onClickCustom,
    downloadUrl,
  } = props;

  const openGame = () => {
    if (onClickCustom) {
      onClickCustom();
      return;
    }

    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Tooltip label={downloadUrl} hasArrow openDelay={200} placement="top">
      <Box
        as="button"
        type="button"
        aria-label={`Open ${name}`}
        onClick={openGame}
        cursor={"pointer"}
        p={"1.5rem"}
        width={"100%"}
        maxW={"23rem"}
        justifySelf={"center"}
      >
        <Image
          border={"1px solid #eaeaea"}
          borderRadius={"25%"}
          aspectRatio={1}
          objectFit="cover"
          bg="black"
          width={"100%"}
          src={`${PUBLIC_IMAGE_URL}/${thumb}`}
          alt={name}
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: "scale(1.04)" }}
        />
      </Box>
    </Tooltip>
  );
};

export default GameCard;
