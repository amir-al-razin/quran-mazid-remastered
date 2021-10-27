import { useColorModeValue } from "@chakra-ui/color-mode";
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
      <Box as="main" pt="14" bg={bg} pb="2">
        {children}
      </Box>
      {/* <Footer /> */}
      {isLoading ? (
        <Spinner position="fixed" bottom="2" right="2" color="green.500" />
      ) : null}
    </>
  );
}
