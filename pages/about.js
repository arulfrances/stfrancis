import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Heading mb={6}>About Our Parish</Heading>
      <Box maxW="700px">
        <Text mb={4}>
          St. Francis of Assisi Church was established in 1990 to serve the growing community
          of Assisi Nagar, Ganapathy, Coimbatore. The church was consecrated on October 9, 1994,
          and has since been a beacon of faith and charity.
        </Text>
        <Text>
          Our parish is dedicated to St. Francis of Assisi, the patron saint known for his love
          of nature and service to the poor. We strive to follow his example in our daily lives
          and church activities.
        </Text>
      </Box>
    </Layout>
  );
}
