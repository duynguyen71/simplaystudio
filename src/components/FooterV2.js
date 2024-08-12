"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import socialMediaLinks from "../data/socialMediaLinks";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box textAlign={"center"}>
          <Text display={["block", "inline"]} fontWeight={500} fontSize={"md"}>
            © 2024 Simplay Studio
          </Text>
          {<Text display={["none", "inline"]}> | </Text>}
          <Text
            textAlign={"center"}
            display={["inline"]}
            fontWeight={500}
            fontSize={"md"}
            cursor={"pointer"}
            onClick={() => {
              navigate("/privacy");
            }}
          >
            Privacy
          </Text>
          {<Text display={"inline"}> | </Text>}
          <Text
            textAlign={"center"}
            display={["inline"]}
            fontWeight={500}
            fontSize={"md"}
            style={{ textDecoration: "none" }}
            cursor={"pointer"}
            onClick={() => {
              window.location.href = "mailto:contact@simplaystudio.com";
            }}
          >
            contact@simplaystudio.com
          </Text>
        </Box>
        <Stack direction={"row"} spacing={6}>
          {/* <SocialButton label={"Discord"} href={socialMediaLinks.discord}>
            <FaDiscord />
          </SocialButton> */}
          <SocialButton label={"YouTube"} href={socialMediaLinks.youtube}>
            <FaYoutube />
          </SocialButton>
          {/* <SocialButton label={"Tiktok"} href={socialMediaLinks.tiktok}>
            <FaTiktok />
          </SocialButton> */}
        </Stack>
      </Container>
    </Box>
  );
}
