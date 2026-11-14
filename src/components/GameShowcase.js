import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaSteam } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { PUBLIC_IMAGE_URL, PUBLIC_VIDEO_URL } from "../hooks";

const STEAM_GRADIENT = "linear(to-r, #1a9fff, #66c0f4)";

const SteamButton = ({ link, comingSoon }) => (
  <Button
    as="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    size="lg"
    leftIcon={<Icon as={FaSteam} boxSize="1.4rem" />}
    bgGradient={STEAM_GRADIENT}
    color="white"
    borderRadius="full"
    px="2rem"
    boxShadow="0 6px 20px rgba(26, 159, 255, 0.45)"
    _hover={{
      transform: "translateY(-2px)",
      boxShadow: "0 8px 26px rgba(26, 159, 255, 0.6)",
    }}
    _active={{ transform: "translateY(0)" }}
  >
    {comingSoon ? "Wishlist on Steam" : "Play on Steam"}
  </Button>
);

const Reveal = ({ children, delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const GameShowcase = ({ game }) => {
  const { showcase, name, comingSoon } = game;
  const steamLink = game.platform?.steam?.link;
  const shots = showcase.screenshots || [];
  const [openIndex, setOpenIndex] = useState(null);

  const showPrev = useCallback(
    () => setOpenIndex((i) => (i - 1 + shots.length) % shots.length),
    [shots.length],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i + 1) % shots.length),
    [shots.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, showPrev, showNext]);

  return (
    <Box w="100%" pb={{ base: "3rem", md: "5rem" }}>
      {/* Hero */}
      <Box
        position="relative"
        w="100%"
        minH={{ base: "26rem", md: "34rem", xl: "40rem" }}
        bgImage={`url(${PUBLIC_IMAGE_URL}/${showcase.hero})`}
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="flex-end"
      >
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, rgba(23,25,35,0.15) 0%, rgba(23,25,35,0.45) 55%, #1A202C 100%)"
        />
        <Container
          maxW="72rem"
          position="relative"
          pb={{ base: "2rem", md: "3rem" }}
        >
          <VStack spacing={{ base: "1rem", md: "1.25rem" }} textAlign="center">
            <Image
              src={`${PUBLIC_IMAGE_URL}/${showcase.logo}`}
              alt={name}
              w={{ base: "85%", md: "34rem" }}
              maxW="100%"
              filter="drop-shadow(0 8px 24px rgba(0,0,0,0.6))"
            />
            {showcase.tagline && (
              <Text
                fontSize={{ base: "md", md: "xl" }}
                maxW="40rem"
                color="whiteAlpha.900"
                textShadow="0 2px 8px rgba(0,0,0,0.8)"
              >
                {showcase.tagline}
              </Text>
            )}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing="1rem"
              align="center"
            >
              {steamLink && (
                <SteamButton link={steamLink} comingSoon={comingSoon} />
              )}
              {comingSoon && (
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  color="#66c0f4"
                >
                  Coming soon
                </Text>
              )}
            </Stack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="72rem" px={{ base: "1rem", md: "2rem" }}>
        {/* Features */}
        {showcase.features?.length > 0 && (
          <VStack
            spacing={{ base: "3rem", md: "5rem" }}
            mt={{ base: "3rem", md: "5rem" }}
            align="stretch"
          >
            {showcase.features.map((feature, index) => (
              <Reveal key={feature.title}>
                <Stack
                  direction={{
                    base: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                  spacing={{ base: "1.25rem", md: "3rem" }}
                  align="center"
                >
                  <Box
                    flex="1.4"
                    w="100%"
                    borderRadius="xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    boxShadow="0 12px 40px rgba(0,0,0,0.45)"
                    bg="black"
                  >
                    <Box
                      as="video"
                      src={`${PUBLIC_VIDEO_URL}/${feature.video}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={feature.title}
                      display="block"
                      w="100%"
                      style={{ aspectRatio: "960 / 444" }}
                    />
                  </Box>
                  <VStack
                    flex="1"
                    align={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                    spacing="0"
                  >
                    <Heading
                      as="h2"
                      fontFamily="'Exo 2', sans-serif"
                      fontStyle="italic"
                      fontWeight="900"
                      textTransform="uppercase"
                      letterSpacing="0.02em"
                      lineHeight="1.05"
                      fontSize={{ base: "2rem", md: "2.75rem", xl: "3.25rem" }}
                      color="transparent"
                      bgGradient="linear(to-b, #ffffff 0%, #e2e8f0 45%, #8a94a6 55%, #f7fafc 100%)"
                      bgClip="text"
                      filter="drop-shadow(0 3px 0 rgba(155, 28, 28, 0.9)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.6))"
                    >
                      {feature.title}
                    </Heading>
                    <Box
                      mt="1rem"
                      h="4px"
                      w="4.5rem"
                      borderRadius="full"
                      bgGradient="linear(to-r, #ffe066, #f5a300)"
                    />
                    {feature.text && (
                      <Text color="gray.400" fontSize="lg">
                        {feature.text}
                      </Text>
                    )}
                  </VStack>
                </Stack>
              </Reveal>
            ))}
          </VStack>
        )}

        {/* Screenshots */}
        {shots.length > 0 && (
          <Box mt={{ base: "3.5rem", md: "6rem" }}>
            <Reveal>
              <Heading as="h2" size="lg" textAlign="center" mb="1.5rem">
                Screenshots
              </Heading>
            </Reveal>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="1rem">
              {shots.map((shot, index) => (
                <Reveal key={shot} delay={(index % 4) * 0.08}>
                  <Box
                    as="button"
                    type="button"
                    aria-label={`Open screenshot ${index + 1}`}
                    onClick={() => setOpenIndex(index)}
                    display="block"
                    w="100%"
                    borderRadius="lg"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Image
                      src={`${PUBLIC_IMAGE_URL}/${shot}`}
                      alt={`${name} screenshot ${index + 1}`}
                      loading="lazy"
                      w="100%"
                      aspectRatio={16 / 9}
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                </Reveal>
              ))}
            </SimpleGrid>
          </Box>
        )}

        {/* Closing call to action */}
        {steamLink && (
          <Reveal>
            <VStack
              mt={{ base: "3.5rem", md: "6rem" }}
              spacing="1.25rem"
              textAlign="center"
            >
              <Heading as="h2" size="lg">
                Ready to clear the swarm?
              </Heading>
              <SteamButton link={steamLink} comingSoon={comingSoon} />
            </VStack>
          </Reveal>
        )}
      </Container>

      {/* Screenshot viewer */}
      <Modal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        size="6xl"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent bg="transparent" boxShadow="none" mx="1rem">
          <ModalCloseButton top="-2.5rem" right="0" />
          {openIndex !== null && (
            <Box position="relative">
              <Image
                src={`${PUBLIC_IMAGE_URL}/${shots[openIndex]}`}
                alt={`${name} screenshot ${openIndex + 1}`}
                w="100%"
                borderRadius="md"
              />
              <HStack
                position="absolute"
                inset={0}
                justify="space-between"
                px="0.5rem"
                pointerEvents="none"
              >
                <IconButton
                  aria-label="Previous screenshot"
                  icon={<ChevronLeftIcon boxSize="2rem" />}
                  onClick={showPrev}
                  isRound
                  bg="blackAlpha.600"
                  pointerEvents="auto"
                />
                <IconButton
                  aria-label="Next screenshot"
                  icon={<ChevronRightIcon boxSize="2rem" />}
                  onClick={showNext}
                  isRound
                  bg="blackAlpha.600"
                  pointerEvents="auto"
                />
              </HStack>
            </Box>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GameShowcase;
