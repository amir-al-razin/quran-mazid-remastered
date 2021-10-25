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
import { Button } from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "./index";
import {
  getChapter,
  getChapterInfo,
  getChapters,
  getChapterVersesResponse,
} from "../../api";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ChapterType from "../../types/ChapterType";
import VerseType from "../../types/VerseType";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import copy from "clipboard-copy";
import { useToast } from "@chakra-ui/react";

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
  const chapterInfo = await getChapterInfo(id);

  return {
    props: {
      chapter: chapterRes.chapter,
      chapterVerses: chapterVersesRes.verses,
      chapterInfo: chapterInfo.chapterInfo,
    },
  };
}
const SurahPage = ({ chapter, chapterVerses, chapterInfo }: Props) => {
  console.log(chapterInfo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <Container maxW="container.lg">
      <Heading
        pb="2"
        fontSize="6xl"
        fontFamily="Poppins"
        fontWeight="bold"
        align="center"
        color="green.500"
      >
        {chapter.nameSimple}
      </Heading>

      <Flex flexDirection="column" gridGap="4">
        {chapterVerses.map(
          ({ text_uthmani, verse_key, id, words, translations }) => (
            <Flex
              flexWrap="wrap"
              bgColor=""
              gap="2"
              p="6"
              key={id}
              bgColor={useColorModeValue("white", "#242832")}
              borderRadius="lg"
              direction="column"
            >
              <HStack align="flex-start" justify="space-between" spacing="4">
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
                <CopyIcon
                  onClick={() => {
                    copy(text_uthmani);
                    toast({
                      title: "Copied!!",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                      variant: "subtle",
                      position: "top",
                    });
                  }}
                />
                <RepeatIcon />
                <InfoIcon onClick={() => onOpen()} />
              </HStack>
            </Flex>
          )
        )}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>chapterInfo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{chapterInfo.shortText}</Text>
            <Text dangerouslySetInnerHTML={{ __html: chapterInfo.text }} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default SurahPage;
