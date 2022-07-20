import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      {/* Main body */}
      <Box bgColor="white">
        <Container p="10px" pt="50px" maxW={"container.sm"}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
