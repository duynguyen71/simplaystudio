import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import { PUBLIC_IMAGE_URL } from "../hooks";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id == id);

  useEffect(() => {
    console.log(article);
  }, [id, article]);

  if (!article) return <></>;
  return (
    <Box>
      {/* Image Cover */}
      <Box>
        <Image
          objectFit={"cover"}
          objectPosition={"center"}
          bgRepeat={"no-repeat"}
          src={`${PUBLIC_IMAGE_URL}/${article.thumb}`}
        />
      </Box>
      {/* End of Image Cover */}
      <Box p={["4", "8", "12"]}>
        <VStack spacing={0} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"}>
            <Heading fontSize={"2xl"} as={"h1"}>
              {article.title}
            </Heading>
            <Text>{article.description}</Text>
          </VStack>
          <Box p={8}>
            <VStack alignItems={"flex-start"}>
              <Heading as={"h2"} fontSize={"xl"}>
                New Items:{" "}
              </Heading>
              {article.itemList.map((item, index) => {
                return <Text>{item}</Text>;
              })}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default ArticlePage;
