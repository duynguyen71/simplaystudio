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
    title: "Release Note",
    href: "/release-note",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  // {
  //   title: "Games",
  //   href: "/games",
  // },

  {
    title: "Privacy",
    href: "/privacy",
  },
];

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <>
      <Box
        border={isOpen ? "none" : "1px solid #eaeaea"}
        borderRadius={isOpen ? "none" : "100px"}
        position={"sticky"}
        top={5}
        px={[".1em", "1em"]}
        py={[".1em", ".5em"]}
        zIndex={1000}
        bg={useColorModeValue("gray.100", "gray.900")}
        mx={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            color={"red"}
            size={["sm", "md"]}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* LOGO */}
          <HStack spacing={8} alignItems={"center"}>
            <Box cursor={"pointer"} onClick={() => navigate("/")}>
              <HStack
                color={"red.400"}
                fontSize={"xl"}
                letterSpacing={1}
                fontWeight={"bold"}
              >
                <Text m={0} p={0} fontSize={"xl"} fontWeight={"bold"}>
                  {"Simplay"}
                </Text>
                <Text
                  fontSize={"xl"}
                  letterSpacing={1}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.800", "gray.200")}
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
            <Button size={["sm", "md"]} onClick={toggleColorMode}>
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
