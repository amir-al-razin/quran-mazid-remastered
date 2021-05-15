import { Container, Flex, Text } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import React from "react";
import { getChapters } from "../api";

export default function chapters({ chapters }) {
  console.log(chapters);

  return (
    <div>
      {chapters.map(({ id, nameArabic, nameSimple }) => (
        <Container maxW={"container.lg"}>
          <Flex
            bgColor="yellow.400"
            p="3"
            color="whiteAlpha.900"
            mb="3"
            key={id}
            justify="space-between"
          >
            <Text>{nameSimple}</Text>
            <Text
              fontSize="3xl"
              sx={{
                fontFamily: "surahnames",
              }}
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
