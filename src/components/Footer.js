import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import socialMediaLinks from "../data/socialMediaLinks";
import {} from "@chakra-ui/icons";
import CustomNavLink from "./CustomNavLink";

export const SocialButton = ({ children, onClick, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      onClick={() => !href && onClick()}
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

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={[5, 10]}>
        <SimpleGrid
          mx={"auto"}
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={[10, 20, 40]}
        >
          <Stack spacing={6}>
            <img
              width={["100px", "120px"]}
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo"
            />
            <Text fontSize={"sm"}>© 2024 Simplay Studio</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Discord"} href={socialMediaLinks.discord}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={"YouTube"} href={socialMediaLinks.youtube}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Tiktok"} href={socialMediaLinks.tiktok}>
                <FaTiktok />
              </SocialButton>
            </Stack>
          </Stack>
          {/* <Stack align={"flex-start"}> */}
          {/* <ListHeader>Contact</ListHeader> */}
          {/* <CustomNavLink
              href={"/contact"}
              onClickCb={() => {}}
              title={"Contact"}
            />
            <CustomNavLink
              href={"/articles"}
              onClickCb={() => {}}
              title={"Article"}
            /> */}
          {/* </Stack> */}
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <CustomNavLink
              href={"/privacy"}
              onClickCb={() => {}}
              title={"Privacy"}
            />
          </Stack>
          {/* <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("red.400", "red.800")}
                color={useColorModeValue("white", "white.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <PlayStoreBadge />
              <AppStoreBadge />
            </Stack>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
