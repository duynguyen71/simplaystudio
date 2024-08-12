import React from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_IMAGE_URL } from "../hooks";

export const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/articles/${article.id}`);
  };
  return (
    <>
      <Wrap m={"1rem"} p={2} marginTop="5">
        <WrapItem minW={"20vw"} maxW={["100%", "100%", "300px"]}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box
                onClick={onClick}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  transform="scale(1.0)"
                  src={`${PUBLIC_IMAGE_URL}/${article.thumb}`}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Box>
            </Box>
            <Heading
              fontWeight={"600"}
              fontSize={["sm", "sm", "sm", "md"]}
              marginTop="2"
            >
              {/* Titile */}
              <Text
                onClick={onClick}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                {article.title}
              </Text>
            </Heading>
            <Text as="p" fontSize={["sm", "md"]} marginTop="2">
              {article.description}
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default ArticleCard;
