import { Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect, Fragment } from "react";

export default function Home({ sajdaVerses }) {
  const verses = sajdaVerses.data.ayahs;

  useEffect(() => {
    console.log(verses);
  });

  console.log(sajdaVerses);

  return (
    <Container maxW="container.lg">
      <Heading align="center" py="5">
        Sajdah Verses
      </Heading>
      <Flex justify="space-evenly" flexDirection="column">
        {verses.map(({ numberInSurah, text, surah: { number } }) => (
          <VStack
            borderRight="4px"
            borderRightColor="green.400"
            p="3"
            bgColor="gray.700"
            mb="3"
            color="white"
          >
            <Text>{text}</Text>
            <Badge bgColor="gray.100">{`${number}:${numberInSurah}`}</Badge>
          </VStack>
        ))}
      </Flex>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://api.alquran.cloud/v1/sajda/en.asad");
  const data = await res.json();
  return {
    props: {
      sajdaVerses: data,
    },
  };
};
