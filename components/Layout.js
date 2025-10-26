import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="gray.50" // Light background for contrast with blue header/footer
    >
      <Header />

      <Box as="main" id="main-content" flex="1">
        <Container
          maxW="container.xl"
          py={{ base: 6, md: 8 }}
          px={{ base: 4, md: 6 }}
        >
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
