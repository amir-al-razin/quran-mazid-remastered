// @ts-nocheck
import { NextPage, GetStaticPaths } from "next";
import React from "react";
import useSWR from "swr";
import { useSettingsStore } from "../../../../global-stores/useStore";
import { apiUrl } from "../../../../utils/api";
import fetcher from "../../../../utils/fetcher";
import {
  getChapter,
  getChapterInfo,
  getChapters,
  getChapterVersesResponse,
} from "../../../../api";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";

interface Props {
  id: number;
}

const Tafsir: NextPage<any> = ({
  chapterId,
  tafsirId: verseNum,
  chapterVersesRes,
}: Props) => {
  const tafsirId = useSettingsStore((state) => state.tafsir);

  const { data, error } = useSWR(
    `${apiUrl}/quran/tafsirs/${tafsirId}?verse_key=${chapterId}%3A${verseNum}`,
    fetcher
  );

  console.log(data);
  return (
    <Container maxW="container.lg" pt="6">
      {data?.tafsirs.map(({ text }) => (
        <Text
          fontWeight="normal"
          fontFamily="madani"
          fontSize="lg"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </Container>
  );
};

export default Tafsir;

// export async function getStaticPaths() {
//   const data = await getChapters();

//   const paths = data.chapters.map((chapter) => {
//     return {
//       params: { id: chapter.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps({ params }) {
  const tafsirId = params.tafsirId;
  const chapterId = params.chapterId;
  const chapterVersesRes = await getChapterVersesResponse(chapterId);

  return {
    props: {
      tafsirId,
      chapterId,
      chapterVersesRes,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [], // no pre-rendered chapters at build time.
  fallback: "blocking", // will server-render pages on-demand if the path doesn't exist.
});
