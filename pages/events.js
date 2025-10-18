import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const events = [
  { title: "Feast of St. Francis of Assisi", date: "October 4", description: "Patronal Feast with Mass and Procession." },
  { title: "Youth Retreat", date: "November 16", description: "A day of prayer and music for parish youth." },
];

export default function Events() {
  return (
    <Layout>
      <Heading mb={6}>Upcoming Events</Heading>
      <VStack spacing={6} maxW="600px" mx="auto" align="stretch">
        {events.map(({ title, date, description }) => (
          <Box key={title} p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm" color="gray.600">{date}</Text>
            <Text mt={2}>{description}</Text>
          </Box>
        ))}
      </VStack>
    </Layout>
  );
}
