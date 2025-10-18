import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container maxW="container.lg" flex="1" pt={6} pb={12}>
        {children}
      </Container>
      <Box as="footer" bg="gray.100" py={4} textAlign="center" fontSize="sm">
        © 2025 St. Francis of Assisi Church, Coimbatore
      </Box>
    </Box>
  );
}
