import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useLoadingStore } from "../global-stores/useStore";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  let isLoading = useLoadingStore((state) => state.loading);

  const bg = useColorModeValue("#F4F5F9", "#1F2126");
  return (
    <>
      <Navbar />
      <Box bg={bg} paddingBlock="2">
        <main>{children}</main>
      </Box>
      {/* <Footer /> */}
      {isLoading ? (
        <Spinner position="fixed" bottom="2" right="2" color="green.500" />
      ) : null}
    </>
  );
}
