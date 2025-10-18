import { Box, Heading, Table, Tbody, Tr, Td, Image } from "@chakra-ui/react";
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
  { day: "First Saturday", time: "6:30 AM | 11 AM St.Francis Novena , Adoration | 6:00 PM (Holy Mass & Car Procession)" },
  { day: "Sub-station Mass (Cheran Ma Nagar)", time: "Alternate Sundays - 5:00 PM" },
];

export default function MassTimings() {
  return (
    <Layout>
      <Heading mb={6}>Mass Timings</Heading>
      <Box maxW="600px" mx="auto">
       <Image
          src="/images/StFrancisChurchMassTimings.jpg"
          alt="St. Francis of Assisi Church"
          mt={6}
          borderRadius="md"
          boxShadow="md"
          maxH="400px"
          objectFit="cover"
          width="100%"
        />

        <br />
        <Table variant="striped" colorScheme="teal" size="md">
          <Tbody>
            {massTimings.map(({ day, time }) => (
              <Tr key={day}>
                <Td fontWeight="bold">{day}</Td>
                <Td>{time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
       
      </Box>
    </Layout>
  );
}
