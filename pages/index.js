import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box textAlign="center" mb={8}>
        <Image
          src="/images/church.jpg"
          alt="St Francis of Assisi Church"
          borderRadius="md"
          mx="auto"
          maxH="400px"
          objectFit="cover"
        />
        <Heading mt={4}>Welcome to St. Francis of Assisi Church</Heading>
        <Text mt={4} maxW="600px" mx="auto" fontSize="lg" color="gray.700">
          Founded in 1990, our church in Assisi Nagar, Ganapathy, Coimbatore is
          a vibrant faith community devoted to worship, outreach, and service.
        </Text>
      </Box>
    </Layout>
  );
}
