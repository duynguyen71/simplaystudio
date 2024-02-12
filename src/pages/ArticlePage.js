import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import { PUBLIC_IMAGE_URL } from "../hooks";

const ArticlePage = () => {
  const { id } = useParams();

  const article = articles.find((a) => a.id == id);

  if (!article) return <></>;

  return (
    <Flex direction={"column"}>
      {/* Image Cover */}
      <Box p={[4, 8, 10]}>
        <Image
          borderRadius={"10"}
          objectFit={"cover"}
          objectPosition={"center"}
          bgRepeat={"no-repeat"}
          src={`${PUBLIC_IMAGE_URL}/${article.thumb}`}
        />
      </Box>
      {/* End of Image Cover */}
      {/* Detail */}
      <Box my={[5, 8]} px={["4", "8", "12"]}>
        <VStack spacing={10} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"}>
            <Heading color="#F56565" fontSize={"2xl"} as={"h1"}>
              {article.title}
            </Heading>
            <Text>{article.description}</Text>
            <Box height={"2vh"} />
            {article.detail}
          </VStack>
          <Box px={8}>
            <VStack alignItems={"flex-start"}>
              {article.itemList && article.itemList.length > 0 && (
                <Heading as={"h2"} fontSize={"xl"}>
                  New Items:{" "}
                </Heading>
              )}
              {article.itemList.map((item, index) => {
                return (
                  <Text key={index} index={index}>
                    {item}
                  </Text>
                );
              })}
            </VStack>
          </Box>
        </VStack>
      </Box>
      {/* End of Detail */}
      {/* Ytb Video */}
      <Box px={8}>
        <AspectRatio w={"100%"} ratio={16 / 9}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="YouTube video player"
            allowFullScreen
            src={article.embedYtbLink}
          />
        </AspectRatio>
      </Box>
      {/* End of Ytb Video */}
    </Flex>
  );
};

export default ArticlePage;
