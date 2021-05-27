import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
import { GetStaticProps } from "next";
import React from "react";
import { getChapters } from "../api";
import Fonts from "../styles/fonts";

export default function chapters({ chapters }) {
  console.log(chapters);

  return (
    <div>
    
      {chapters.map(({ id, nameArabic, nameSimple }) => (
        <Container key={id} maxW={"container.lg"}>
          <Flex
            bgColor="yellow.400"
            p="3"
            color="whiteAlpha.900"
            mb="3"
            justify="space-between"
            align="center"
          >
            <Text>{nameSimple}</Text>
            <Text
             fontFamily="Madani"
             fontSize="3xl"
            >
              {nameArabic}
            </Text>
          </Flex>
        </Container>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const chaptersResponse = await getChapters();
  return {
    props: {
      chapters: chaptersResponse.chapters,
    },
  };
};
