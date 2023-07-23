import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const CustomNavLink = ({ title, href, onClickCb }) => (
  <Link
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
  </Link>
);

export default CustomNavLink;
