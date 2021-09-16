import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { getChapters } from "../../api";
import { CONTENT } from "../../components/chapters/ChapterIcon";

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

  return (
    <Box py="2" bgColor="gray.900">
      <Container maxW={"container.lg"}>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={2}
        >
          {chapters.map(({ id, nameArabic, nameSimple }) => (
            <Link href={`/chapters/${id}`} key={id + nameSimple}>
              <Flex
                bgColor="gray.800"
                p="4"
                borderRadius="md"
                justify="space-between"
                align="center"
                cursor="pointer"
                transition=".2s ease"
                _hover={{ bg: "gray.700" }}
              >
                <Flex align="center">
                  <Flex
                    mr="2"
                    w="5"
                    h="5"
                    border="2px"
                    borderColor="gray.700"
                    borderRadius="3xl"
                    fontWeight="semibold"
                    p="4"
                    align="center"
                    justify="center"
                  >
                    {id}
                  </Flex>
                  <Text fontWeight="semibold">
                    Surah
                    <br />
                    {nameSimple}
                  </Text>
                </Flex>

                <Text
                  fontFamily="SurahNames"
                  fontSize="3xl"
                  _before={{ content: `"\\E${CONTENT[id]} \\E903"` }}
                ></Text>
              </Flex>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
