import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Fonts from "../styles/fonts";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
