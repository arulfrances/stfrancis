import { Box, Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import Layout from "../components/Layout";

const massTimings = {
  weekdays: "Mon–Thurs: 6:30 a.m.",
  friSat: "Fri–Sat: 6:00 p.m.",
  sunday: "Sun: 8:15 a.m. & 6:00 p.m.",
  substation: "Cheran Ma Nagar – Alternate Sundays 5:00 p.m.",
};

export default function MassTimings() {
  return (
    <Layout title="Mass Timings">
      <Heading mb={6}>Mass Timings</Heading>
      <Box maxW="600px" mx="auto">
        <Table variant="striped" colorScheme="teal" size="md" fontSize="md">
          <Tbody>
            <Tr>
              <Td>Weekdays</Td>
              <Td>{massTimings.weekdays}</Td>
            </Tr>
            <Tr>
              <Td>Friday - Saturday</Td>
              <Td>{massTimings.friSat}</Td>
            </Tr>
            <Tr>
              <Td>Sunday</Td>
              <Td>{massTimings.sunday}</Td>
            </Tr>
            <Tr>
              <Td>Sub-station Mass</Td>
              <Td>{massTimings.substation}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
}
