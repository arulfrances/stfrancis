import React from "react";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
  Image,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const massTimings = [
  { day: "Monday", time: "6:30 AM" },
  { day: "Tuesday", time: "6:30 AM" },
  { day: "Wednesday", time: "6:30 AM" },
  { day: "Thursday", time: "6:30 AM" },
  { day: "Friday", time: "6:30 AM" },
  { day: "Saturday", time: "6:30 AM" },
  { day: "Sunday", time: "6:30 AM | 8:15 AM | 5:30 PM" },
  { day: "First Friday", time: "6:30 AM & 6:00 PM (Holy Mass & Adoration)" },
  {
    day: "First Saturday",
    time: "6:30 AM | 11 AM St.Francis Novena, Adoration | 6:00 PM (Holy Mass & Car Procession)",
  }
];

export default function MassTimings() {
  return (
    <Layout>
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          bgGradient="linear(to-r, #3b82f6, #6366f1)"
          bgClip="text"
          lineHeight="1.3"
        >
          Mass Timings
        </Heading>
      </Box>
      <br />

 <Box textAlign="center">
        <Image
          src="/images/StFrancisChurchMassTimings.jpg"
          alt="Mass Timings"
          borderRadius="lg"
          boxShadow="lg"
          fallbackSrc="https://via.placeholder.com/800x400?text=Mass+Timings"
          width={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" }}
          maxW="1200px"
          mx="auto"
        />
      </Box>

      <Box bg="white" p={8} borderRadius="lg" boxShadow="md" mb={8}>
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
