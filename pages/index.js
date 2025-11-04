import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import HeroSlider from "../components/Slider";

const guides = [
  {
    title: "HIS HOLINESS POPE LEO XIV",
    description:
      "We are well guided towards divine path by Our LORD JESUS CHRIST through HIS HOLINESS POPE LEO XIV",
    image: "/images/Pope-Leo-XIV.jpg",
  },
  {
    title: "HIS EXCELLENCY BISHOP LEPHONSE THOMAS AQUINAS",
    description:
      "We are specially guided by HIS EXCELLENCY Bishop Lephonse Thomas Aquinas",
    image: "/images/bishop-thomas-acquinas.jpg",
  },
  {
    title: "PARISH PRIEST REVERENT Fr. VICTOR PAULRAJ",
    description:
      "We are being fostered in spiritual growth through our Parish Priest Rev. Fr. Victor Paulraj.",
    image: "/images/parish-priest-victor-paulraj.jpg",
  },
];

const massTimings = [
  { day: "Monday - Saturday", time: "6:30 AM" },
  { day: "Sunday", time: "6:30 AM | 8:15 AM | 5:30 PM" },
  { day: "First Friday", time: "6:30 AM & 6:00 PM (Holy Mass & Adoration)" },
  {
    day: "First Saturday",
    time: "6:30 AM | 11 AM St.Francis Novena, Adoration | 6:00 PM (Holy Mass & Car Procession)",
  }
];

export default function Home() {
  return (
    <Layout>
      <HeroSlider />

      {/* Welcome Section */}
      <Box textAlign="center" py={10}>
        <Heading
          as="h1"
          size="2xl"
          mb={6}
          bgGradient="linear(to-r, #3b82f6, #6366f1)"
          lineHeight="1.3"
          bgClip="text"
        >
          Welcome to St. Francis of Assisi Church
        </Heading>
        <VStack spacing={4} maxW="3xl" mx="auto">
          <Text fontSize="lg" color="gray.700">
            St. Francis of Assisi Church was established in 1990 to serve the
            growing community of Assisi Nagar, Ganapathy, Coimbatore. The
            church was consecrated on October 9, 1994, and has since been a
            beacon of faith and charity.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Our parish is dedicated to St. Francis of Assisi, the patron saint
            known for his love of nature and service to the poor. We strive to
            follow his example in our daily lives and church activities.
          </Text>
        </VStack>
      </Box>

      {/* Spiritual Guides Section */}
      <Box bg="white" py={10} px={4} borderRadius="lg" mb={10}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          bgGradient="linear(to-r, #3b82f6, #6366f1)"
          bgClip="text"
        >
          Spiritual Guidance
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {guides.map(({ title, description, image }, index) => (
            <VStack
              key={index}
              bg="gray.50"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              spacing={4}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              <Image
                src={image}
                alt={title}
                borderRadius="lg"
                boxSize="200px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/200"
              />
              <Heading as="h3" size="md" textAlign="center" color="gray.800">
                {title}
              </Heading>
              <Text fontSize="sm" textAlign="center" color="gray.600">
                {description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Mass Timings Section */}
      <Box bg="white" py={10} px={4} borderRadius="lg" mb={10}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          bgGradient="linear(to-r, #3b82f6, #6366f1)"
          bgClip="text"
        >
          Mass Timings
        </Heading>
        <Table variant="striped" colorScheme="gray" size="lg">
          <Thead>
            <Tr bg="gray.200">
              <Th fontSize="md">Day</Th>
              <Th fontSize="md">Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {massTimings.map(({ day, time }, index) => (
              <Tr key={index}>
                <Td fontWeight="semibold">{day}</Td>
                <Td>{time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
}
