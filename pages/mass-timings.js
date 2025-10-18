import { Box, Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import Layout from "../components/Layout";

const massTimings = [
  { day: "Monday - Thursday", time: "6:30 a.m." },
  { day: "Friday - Saturday", time: "6:00 p.m." },
  { day: "Sunday", time: "8:15 a.m. & 6:00 p.m." },
  { day: "Sub-station Mass (Cheran Ma Nagar)", time: "Alternate Sundays - 5:00 p.m." },
];

export default function MassTimings() {
  return (
    <Layout>
      <Heading mb={6}>Mass Timings</Heading>
      <Box maxW="600px" mx="auto">
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
