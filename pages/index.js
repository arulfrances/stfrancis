import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import HeroSlider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <Container maxW="container.md" py={10}>
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="xl">
            Welcome to St. Francis of Assisi Church
          </Heading>
          <Text fontSize="lg" color="gray.700">
            St. Francis of Assisi Church was established in 1990 to serve the growing community of Assisi Nagar, Ganapathy, Coimbatore.
            The church was consecrated on October 9, 1994, and has since been a beacon of faith and charity.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Our parish is dedicated to St. Francis of Assisi, the patron saint known for his love of nature and service to the poor. We strive
            to follow his example in our daily lives and church activities.
          </Text>
        </VStack>
      </Container>
    </Layout>
  );
}
