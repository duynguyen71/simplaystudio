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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
];
const NavLink = ({ title, href, onClickCb }) => (
  <RouterLink
    to={href}
    onClick={() => {
      onClickCb();
    }}
  >
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {title}
    </Text>
  </RouterLink>
);

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <>
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
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={["none", "block"]}
              cursor={"pointer"}
              onClick={() => navigate("/")}
            >
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
                <NavLink onClickCb={onClose} key={link.title} {...link} />
              ))}
            </HStack>
          </HStack>
          <HStack spacing={7} alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavLinks.map((link) => (
                <NavLink onClickCb={onClose} key={link.title} {...link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
