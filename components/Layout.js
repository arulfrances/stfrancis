import { Box, Container, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Layout({ children, title }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" bg="teal.600" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading size="md">
              <NextLink href="/" passHref>
                <Link _hover={{ textDecoration: "none" }} color="white">
                  St. Francis of Assisi Church
                </Link>
              </NextLink>
            </Heading>
            <Spacer />
            <NextLink href="/mass-timings" passHref>
              <Link mr={4} color="white">Mass Timings</Link>
            </NextLink>
            <NextLink href="/sermons" passHref>
              <Link mr={4} color="white">Sermons</Link>
            </NextLink>
            <NextLink href="/events" passHref>
              <Link mr={4} color="white">Events</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link color="white">Contact</Link>
            </NextLink>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" flex="1" py={6}>
        {children}
      </Container>

      <Box as="footer" bg="gray.100" py={4} textAlign="center" fontSize="sm">
        © 2025 St. Francis of Assisi Church, Coimbatore
      </Box>
    </Box>
  );
}
