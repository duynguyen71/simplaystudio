
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import socialMediaLinks from "../data/socialMediaLinks";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const SmallWithSocial = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
        align={{ base: "center", md: "center" }}
      >
        <Box textAlign="center">
          <Text display={["block", "inline"]} fontWeight={500} fontSize="md">
            © {currentYear}{" "}
            <Text as="span" color="red">
              Sim
            </Text>
            <Text as="span">play Studio</Text>
          </Text>
          <Text display={["none", "inline"]}> | </Text>
          <Text
            as={RouterLink}
            to="/privacy/"
            display="inline"
            fontWeight={500}
            fontSize="md"
            cursor="pointer"
          >
            Privacy
          </Text>
          <Text display="inline"> | </Text>
          <Text
            as="a"
            href="mailto:contact@simplaystudio.com"
            display="inline"
            fontWeight={500}
            fontSize="md"
            cursor="pointer"
          >
            contact@simplaystudio.com
          </Text>
        </Box>

        <Stack as="nav" aria-label="Footer navigation" direction="row" spacing={4}>
          <Text as={RouterLink} to="/games/">Games</Text>
          <Text as={RouterLink} to="/articles/">News</Text>
          <Text as={RouterLink} to="/release-note/">Release notes</Text>
          <Text as={RouterLink} to="/contact/">Contact</Text>
        </Stack>

        <Stack direction="row" spacing={6} align="center">
          <SocialButton label="YouTube" href={socialMediaLinks.youtube}>
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default SmallWithSocial;
