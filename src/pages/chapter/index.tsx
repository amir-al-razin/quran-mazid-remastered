import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
import { GetStaticProps } from "next";
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
    <Box py="2" bgGradient="linear(to-l, #801fe1, #FF0080)" bgColor="blue.800">
      <Container maxW={"container.lg"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {chapters.map(({ id, nameArabic, nameSimple }) => (
            <Flex
              key={id}
              bgColor="purple.600"
              p="4"
              color="whiteAlpha.900"
              borderRadius="md"
              justify="space-between"
              align="center"
              cursor="pointer"
              _hover={{ shadow: "lg" }}
            >
              <Flex align="center">
                <Flex mr="2" w="5" h="5" bgColor="purple.800" borderRadius="3xl" p="4" align="center" justify="center">
                  {id}
                </Flex>
                <Text>{nameSimple}</Text>
              </Flex>

              <Text
                fontFamily="SurahNames"
                fontSize="3xl"
                _before={{ content: `"\\E${CONTENT[id]} \\E903"` }}
              ></Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
