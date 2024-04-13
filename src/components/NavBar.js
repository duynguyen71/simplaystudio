import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import { SocialButton } from "./Footer";
import socialMediaLinks from "../data/socialMediaLinks";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
const NavLinks = [
  {
    title: "Games",
    href: "/games",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Privacy",
    href: "/privacy",
  },
  {
    title: "Release Note",
    href: "/release-note",
  },
];

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <>
      <Alert
        onClick={() => {
          window.open("https://discord.com/invite/rC8xRFWq", "_blank");
        }}
        status="info"
      >
        <AlertIcon />
        <Text
          _hover={{
            textDecoration: "underline",
          }}
          cursor={"pointer"}
        >
          Fireworks Play multiplayer mode is now available. Check out{" "}
          <Text
            as={"span"}
            _hover={{
              textDecoration: "underline",
              textColor: "red.400",
            }}
            fontWeight={"bold"}
          >
            Discord
          </Text>{" "}
          for the latest updates.
        </Text>
      </Alert>
      <Box
        position={"sticky"}
        top={0}
        zIndex={1000}
        py={4}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* LOGO */}
          <HStack spacing={8} alignItems={"center"}>
            <Box cursor={"pointer"} onClick={() => navigate("/")}>
              <HStack>
                <Text fontSize={"xl"} letterSpacing={1} fontWeight={"bold"}>
                  Simplay
                </Text>
                <Text
                  fontSize={"xl"}
                  letterSpacing={1}
                  fontWeight={"bold"}
                  color={"red.400"}
                >
                  Studio
                </Text>
              </HStack>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {NavLinks.map((link) => (
                <CustomNavLink onClickCb={onClose} key={link.title} {...link} />
              ))}
            </HStack>
          </HStack>
          {/* LOGO */}
          <HStack spacing={[3, 7]} alignItems={"center"}>
            <HStack display={["none", "none", "inline-block"]} spacing={[3, 7]}>
              <SocialButton label={"Discord"} href={socialMediaLinks.discord}>
                <FaDiscord />
              </SocialButton>
              <SocialButton label={"YouTube"} href={socialMediaLinks.youtube}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Tiktok"} href={socialMediaLinks.tiktok}>
                <FaTiktok />
              </SocialButton>
            </HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavLinks.map((link) => (
                <CustomNavLink onClickCb={onClose} key={link.title} {...link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
