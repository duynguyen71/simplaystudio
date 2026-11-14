import { Box, HStack, Icon, Image, Text, Tooltip } from "@chakra-ui/react";
import { FaSteam } from "react-icons/fa";
import { PUBLIC_IMAGE_URL } from "../hooks";

const GameCard = (props) => {
  const {
    name,
    thumb,
    onClickCustom,
    downloadUrl,
    href,
    comingSoon,
    platform,
  } = props;

  const isAvailable = Boolean(onClickCustom || downloadUrl);

  const link = href || downloadUrl;
  const isExternal = Boolean(link) && !link.startsWith("/");

  const openGame = (event) => {
    if (onClickCustom) {
      event.preventDefault();
      onClickCustom();
      return;
    }

    if (link) return; // the anchor handles it

    if (!downloadUrl) return;
    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Tooltip
      label={downloadUrl || `${name} - coming soon`}
      hasArrow
      openDelay={200}
      placement="top"
    >
      <Box
        {...(link
          ? {
              as: "a",
              href: link,
              ...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              }),
            }
          : { as: "button", type: "button" })}
        display="block"
        aria-label={isAvailable ? `Open ${name}` : `${name} - coming soon`}
        aria-disabled={!isAvailable}
        onClick={openGame}
        cursor={isAvailable ? "pointer" : "default"}
        p={["0.75rem", "1rem"]}
        width={"100%"}
        maxW={"27rem"}
        justifySelf={"center"}
      >
        <Box position="relative">
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
          {comingSoon && (
            <HStack
              position="absolute"
              left="50%"
              bottom="7%"
              transform="translateX(-50%)"
              pointerEvents="none"
              spacing="0.5rem"
              whiteSpace="nowrap"
              px="0.9rem"
              py="0.35rem"
              borderRadius="full"
              border="1px solid rgba(255, 255, 255, 0.7)"
              bgGradient="linear(to-r, #1a9fff, #66c0f4)"
              boxShadow="0 4px 14px rgba(26, 159, 255, 0.55)"
              color="white"
              textShadow="0 1px 2px rgba(0, 0, 0, 0.35)"
            >
              {platform?.steam && (
                <Icon as={FaSteam} boxSize="1.1rem" aria-hidden="true" />
              )}
              <Text
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Coming soon
              </Text>
            </HStack>
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default GameCard;
