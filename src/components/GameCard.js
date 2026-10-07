import { Box, Image, Tooltip } from "@chakra-ui/react";
import { PUBLIC_IMAGE_URL } from "../hooks";

const GameCard = (props) => {
  const {
    name,
    thumb,
    onClickCustom,
    downloadUrl,
  } = props;

  return (
    <Tooltip label={downloadUrl} hasArrow openDelay={200} placement="top">
      <Box
        as={onClickCustom ? "button" : "a"}
        type={onClickCustom ? "button" : undefined}
        href={onClickCustom ? undefined : downloadUrl}
        target={onClickCustom ? undefined : "_blank"}
        rel={onClickCustom ? undefined : "noopener noreferrer"}
        aria-label={`Open ${name}`}
        onClick={onClickCustom}
        cursor={"pointer"}
        p={["0.75rem", "1rem"]}
        width={"100%"}
        maxW={"27rem"}
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
