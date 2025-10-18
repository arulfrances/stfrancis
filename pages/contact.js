import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Heading mb={6}>Contact Us</Heading>
      <VStack as="form" spacing={6} maxW="600px" mx="auto">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your email" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" rows={6} />
        </FormControl>
        <Button colorScheme="teal" type="submit" width="full">Send Message</Button>
      </VStack>

      <Box mt={10} maxW="600px" mx="auto" textAlign="center" color="gray.600">
        <Text>Address: St. Francis of Assisi Church, Athipalayam Pirivu, Assisi Nagar, Ganapathy, Coimbatore – 641006</Text>
        <Text>Phone: 0422‑2531533</Text>
        <Text>Parish Priest Mobile: +91 94427 64539</Text>
        <Text>Email: info@stfrancisassisichurch.in</Text>
      </Box>
    </Layout>
  );
}
