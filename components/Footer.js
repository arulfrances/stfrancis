import React from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Stack,
  Text,
  Link as ChakraLink,
  Flex,
  Icon,
  Divider,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-br, #0f172a, #1e293b, #334155)"
      color="white"
      mt="auto"
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Contact Information */}
          <Stack spacing={4}>
            <Heading size="md" color="blue.300" mb={2}>
              Contact Us
            </Heading>
            <Flex align="center" gap={3}>
              <Icon as={FaMapMarkerAlt} boxSize={5} color="blue.300" />
              <Text fontSize="sm" lineHeight="tall">
                St. Francis of Assisi Church
                <br />
                Coimbatore, Tamil Nadu
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaPhone} boxSize={5} color="blue.300" />
              <Text fontSize="sm">+91 422‑2531533</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaEnvelope} boxSize={5} color="blue.300" />
              <ChakraLink
                href="contact@stfrancisassisichurch.in"
                fontSize="sm"
                _hover={{ color: "blue.300", textDecoration: "underline" }}
              >
                contact@stfrancisassisichurch.in
              </ChakraLink>
            </Flex>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4}>
            <Heading size="md" color="blue.300" mb={2}>
              Quick Links
            </Heading>
            <NextLink href="/about" passHref legacyBehavior>
              <ChakraLink
                fontSize="sm"
                _hover={{ color: "blue.300", pl: 2 }}
                transition="all 0.2s"
              >
                About Parish
              </ChakraLink>
            </NextLink>
            <NextLink href="/mass-timings" passHref legacyBehavior>
              <ChakraLink
                fontSize="sm"
                _hover={{ color: "blue.300", pl: 2 }}
                transition="all 0.2s"
              >
                Mass Timings
              </ChakraLink>
            </NextLink>
            <NextLink href="/sermons" passHref legacyBehavior>
              <ChakraLink
                fontSize="sm"
                _hover={{ color: "blue.300", pl: 2 }}
                transition="all 0.2s"
              >
                Sermons
              </ChakraLink>
            </NextLink>
            <NextLink href="/events" passHref legacyBehavior>
              <ChakraLink
                fontSize="sm"
                _hover={{ color: "blue.300", pl: 2 }}
                transition="all 0.2s"
              >
                Events
              </ChakraLink>
            </NextLink>
            <NextLink href="/contact" passHref legacyBehavior>
              <ChakraLink
                fontSize="sm"
                _hover={{ color: "blue.300", pl: 2 }}
                transition="all 0.2s"
              >
                Contact
              </ChakraLink>
            </NextLink>
          </Stack>

          {/* Social Media */}
          <Stack spacing={4} align="center">
            <Heading size="md" color="blue.300" mb={2}>
              Follow Us
            </Heading>
            <Flex gap={6} justify="center" align="center" w="100%">
              <ChakraLink
                href="https://www.youtube.com/sfaccbe"
                isExternal
                _hover={{ transform: "scale(1.2)", color: "blue.300" }}
                transition="all 0.3s"
              >
                <Icon as={FaYoutube} boxSize={7} />
              </ChakraLink>
            </Flex>

            <Text fontSize="sm" mt={4} color="gray.300" textAlign="center">
              Join us for worship and fellowship
            </Text>
          </Stack>

        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.300" />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={2}
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} St. Francis of Assisi Church, Coimbatore
          </Text>
          <Text fontSize="sm" color="gray.400">
            All Rights Reserved
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
