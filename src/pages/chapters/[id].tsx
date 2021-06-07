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
    <Box>
      <Heading py="2" fontSize="6xl" align="center" fontFamily="Madani">
        {chapter.nameArabic}
      </Heading>

      <Flex flexDirection="column" bgColor="pink-900">
        {chapterVerses.map(({ text_madani, id, words }) => (
          <Flex
            flexWrap="wrap"
            bgColor="pink.500"
            dir="rtl"
            borderBottom="1px"
            gap="2"
            py="3"
            px="2"
            key={id}
          >
            <Text fontFamily="Madani" fontSize="5xl">
              {text_madani}
            </Text>
            {words.map((word) => (
              <Text fontSize="6xl" fontFamily={word.class_name}>
                &#xfb51;&#xfb52;&#xfb53;&#xfb54;&#xfb55;
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default SurahPage;
