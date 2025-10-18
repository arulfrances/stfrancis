import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Box bg="teal.50" p={8} borderRadius="md" textAlign="center">
        <Heading mb={4}>Welcome to St. Francis of Assisi Church</Heading>
        <Text fontSize="lg" maxW="700px" mx="auto" color="gray.700">
          Founded in 1990, our church in Assisi Nagar, Ganapathy, Coimbatore is devoted to faith, community, and service.
        </Text>
      </Box>
    </Layout>
  );
}
