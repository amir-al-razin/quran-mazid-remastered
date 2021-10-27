import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import {
  Box,
  Center,
  Container,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { getChapters } from "../../api";
// import { CONTENT } from "../../components/chapters/ChapterIcon";

export const getStaticProps: GetStaticProps = async () => {
  const chaptersResponse = await getChapters();
  return {
    props: {
      chapters: chaptersResponse.chapters,
    },
  };
};

export default function Chapters({ chapters }) {
  console.log(chapters);

  const numBg = useColorModeValue("green.50", "green.400");
  const numColor = useColorModeValue("green.500", "white");

  return (
    <Box py="4">
      <Container maxW={"container.xl"} mr="0">
        {/* TODO:list style & card style */}
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={3}
        >
          {chapters.map(({ id, nameArabic, nameSimple, translatedName }) => (
            <Link href={`/chapters/${id}`} key={id + nameSimple}>
              <VStack
                bgColor={useColorModeValue("white", "#242832")}
                p="4"
                borderRadius="lg"
                // justify="space-"
                spacing="5"
                // align="center"
                align="stretch"
                cursor="pointer"
                // transition=" .3s"
                // w={id == "1" && "20"}
                _hover={{
                  outlineWidth: "2px",
                  outlineStyle: "solid",
                  outlineColor: "green.500",
                }}
              >
                <HStack justify="space-between" align="center">
                  <Center
                    w="3"
                    h="3"
                    borderRadius="3xl"
                    fontWeight="bold"
                    bg={numBg}
                    color={numColor}
                    p="3.5"
                    fontSize="sm"
                  >
                    {id}
                  </Center>
                  <FaHeart isFavourite={id === 1 && true} />
                </HStack>
                <VStack align="flex-start" spacing="0">
                  <Text fontWeight="bold" fontSize="md">
                    {/* <p style={{ fontWeight: 900, fontFamily: "Poppins" }}> */}
                    {nameSimple}
                    {/* </p> */}
                  </Text>
                  <Text
                    textTransform="uppercase"
                    fontWeight="semibold"
                    color="gray.400"
                    fontSize="sm"
                  >
                    {translatedName.name}
                  </Text>
                </VStack>

                {/* <Text
                  fontFamily="SurahNames"
                  fontSize="2xl"
                  _before={{ content: `"\\E${CONTENT[id]} \\E903"` }}
                ></Text> */}
              </VStack>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export function FaHeart(props) {
  return (
    <Icon
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      color={props.isFavourite ? "green.500" : "gray.400"}
      textShadow="lg"
      fontSize="2xl"
      {...props}
    >
      <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"></path>
    </Icon>
  );
}
