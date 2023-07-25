import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Article, { BlogTags } from "../components/Article";
import articles from "../data/articles";
import { PUBLIC_IMAGE_URL } from "../hooks";

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p={["4", "12"]}>
      <Heading fontSize={["lg", "3xl"]} as="h1">
        Articles
      </Heading>
      <MainArticle />
      {/* Latest articles */}
      <Heading fontSize={["lg", "3xl"]} as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      {/* Article */}
      <Flex>
        {articles.slice(1).map((aritcle, index) => {
          return <Article key={index} article={aritcle} />;
        })}
      </Flex>

      {/* Article Fotter Explain */}
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading fontSize={["lg", "3xl"]} as="h2">
          What we write about
        </Heading>
        <Text as="p" fontSize={["md", "lg"]}>
          Regarding updates on our games or big new features coming up, we want
          to keep you guys informed through this article page. We hope you enjoy
          it and have fun playing our games.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;

const MainArticle = () => {
  const article = articles[0];
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              borderRadius="lg"
              src={`${PUBLIC_IMAGE_URL}/${article.thumb}`}
              alt="bg image"
              objectFit="contain"
            />
          </Link>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <BlogTags tags={["FW Play", "New Update"]} />
        <Heading fontSize={["md", "2xl"]} as={"h2"} marginTop="1">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            {article.title}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {article.description}
        </Text>
      </Box>
    </Box>
  );
};
