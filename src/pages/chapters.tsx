import { Container, Flex, Heading, Text } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
import { GetStaticProps } from "next";
import React from "react";
import { getChapters } from "../api";
import { CONTENT } from "../components/chapters/ChapterIcon";
import Fonts from "../styles/fonts";

export default function Chapters({ chapters }) {
  console.log(chapters);

  return (
    <div>
      <Container maxW={"container.lg"}>
        {chapters.map(({ id, nameArabic, nameSimple }) => (
          <Flex
            key={id}
            bgColor="yellow.400"
            p="3"
            color="whiteAlpha.900"
            mb="3"
            justify="space-between"
            align="center"
          >
            <Text>{nameSimple}</Text>
            <Text
              fontFamily="SurahNames"
              fontSize="3xl"
              _before={{ content: `"\\E${CONTENT[id]} \\E903"` }}
            ></Text>
          </Flex>
        ))}
      </Container>
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
