import React from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Link,
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
const Article = ({ article }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/articles/${article.id}`);
  };
  return (
    <>
      <Wrap p={[2, 8]} spacing={["5px", "30px"]} marginTop="5">
        <WrapItem minW={"20vw"} maxW={"300px"}>
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
            {/* <BlogTags tags={["FW Play", "New Update"]} marginTop="3" /> */}
            <Heading fontWeight={"600"} fontSize={["md", "2xl"]} marginTop="2">
              <Text
                onClick={onClick}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                {article.title}
              </Text>
            </Heading>
            <Text as="p" fontSize={["xs", "md"]} marginTop="2">
              {article.description}
            </Text>
            {/* <BlogAuthor
              name="Duy Nguyen"
              date={new Date("2021-04-06T19:01:27Z")}
            /> */}
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Article;
