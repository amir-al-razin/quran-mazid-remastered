import { Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  useEffect(() => {});

  return (
    <Box minH="100vh" display="grid" placeItems="center">
      <Button>
        <Link href="/chapters">Read Qur'an</Link>
      </Button>
    </Box>
  );
}
