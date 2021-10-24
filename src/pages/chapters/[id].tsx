// @ts-nocheck
import {
  ChevronRightIcon,
  CopyIcon,
  InfoIcon,
  LinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { FaHeart } from "./index";
import { getChapter, getChapters, getChapterVersesResponse } from "../../api";
import ChapterType from "../../types/ChapterType";
import VerseType from "../../types/VerseType";

interface Props {
  chapter: ChapterType;
  chapterVerses: VerseType[];
}

export async function getStaticPaths() {
  const data = await getChapters();

  const paths = data.chapters.map((chapter) => {
    return {
      params: { id: chapter.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const chapterRes = await getChapter(id);
  const chapterVersesRes = await getChapterVersesResponse(id);

  return {
    props: {
      chapter: chapterRes.chapter,
      chapterVerses: chapterVersesRes.verses,
    },
  };
}
const SurahPage = ({ chapter, chapterVerses }: Props) => {
  console.log(chapterVerses);
  return (
    <Container bg="" maxW="container.lg">
      <Heading
        py="2"
        fontSize="6xl"
        fontFamily="Poppins"
        fontWeight="bold"
        align="center"
        color="green.500"
      >
        {chapter.nameSimple}
      </Heading>

      <Flex flexDirection="column" bgColor="">
        {chapterVerses.map(
          ({ text_uthmani, verse_key, id, words, translations }) => (
            <Flex
              flexWrap="wrap"
              bgColor=""
              mb="2"
              gap="2"
              p="6"
              key={id}
              bg="white"
              borderRadius="lg"
              direction="column"
            >
              <HStack align="flex-start" justify="space-between">
                <Text color="green.500" lineHeight="taller" fontWeight="bold">
                  {verse_key}
                </Text>
                <Text w="full" dir="rtl" fontFamily="Madani" fontSize="3xl">
                  {text_uthmani}
                </Text>
              </HStack>

              <HStack mt="6" mb="2">
                <Text
                  fontFamily="Poppins"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color="green.400"
                  fontSize="sm"
                  dangerouslySetInnerHTML={{
                    __html: translations[0].resource_name,
                  }}
                />
                <Divider orientation="vertical" height="15px" />
                <Text
                  fontFamily="Poppins"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color="orange.300"
                  fontSize="sm"
                >
                  see tafsirs <ChevronRightIcon />
                </Text>
              </HStack>
              <Text
                w="full"
                fontFamily="Poppins"
                fontSize="lg"
                dangerouslySetInnerHTML={{ __html: translations[0].text }}
              />
              <Divider marginBlock="4" />
              <HStack
                fontSize="xl"
                color="gray.400"
                spacing="3.5"
                marginBlock="2"
              >
                <FaHeart fontSize="2xl" />
                <CopyIcon />
                <RepeatIcon />
                <InfoIcon />
              </HStack>
            </Flex>
          )
        )}
      </Flex>
    </Container>
  );
};

export default SurahPage;
