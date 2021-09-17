import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { getChapter, getChapters, getChapterVersesResponse } from "../../api";
import ChapterType from "../../types/ChapterType";
import VerseType from "../../types/VerseType";

interface Props {
  chapter: ChapterType;
  chapterVerses: VerseType[];
  chapterVersesMeta: any;
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
      chapterVersesMeta: chapterVersesRes.meta,
    },
  };
}
const SurahPage = ({ chapter, chapterVerses, chapterVersesMeta }: Props) => {
  console.log(chapterVerses);
  return (
    <Container bg="">
      <Heading
        py="2"
        fontSize="6xl"
        fontWeight="medium"
        align="center"
        fontFamily="Madani"
      >
        {chapter.nameArabic}
      </Heading>

      <Flex flexDirection="column" bgColor="">
        {chapterVerses.map(({ text_madani, id, words }) => (
          <Flex
            flexWrap="wrap"
            bgColor="purple.900"
            borderBottom="1px"
            borderColor="purple.700"
            mb="2"
            gap="2"
            py="3"
            px="2"
            key={id}
          >
            <Text w="full" dir="rtl" fontFamily="Madani" fontSize="3xl">
              {text_madani}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default SurahPage;
