import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import HeroSlider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <Box textAlign="center" mb={8}>
        <Heading>Welcome to St. Francis of Assisi Church</Heading>
        <Text mt={4} maxW="600px" mx="auto" fontSize="lg" color="gray.700">
          Founded in 1990, our church in Assisi Nagar, Ganapathy, Coimbatore is a vibrant faith community devoted to worship, outreach, and service.
        </Text>
      </Box>
    </Layout>
  );
}
