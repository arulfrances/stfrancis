import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../components/Layout";

export default function Contact() {
  const toast = useToast();
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "637012bf-2e5d-406e-b40a-6a83cb1452b6",
          ...formData,
        }),
      });

      const result = await response.json();

     if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || "Error sending message.");
      }
    } catch (error) {
      toast({
        title: "Failed to send message.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    return (
      <Layout>
        <Box textAlign="center" py={10}>
          <Text>Loading...</Text>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, #3b82f6, #6366f1)"
            bgClip="text"
            lineHeight="1.3"
          >
            Contact Us
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Contact Form */}
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </FormControl>


                <FormControl isRequired>
                  <FormLabel>Contact Number</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </FormControl>


                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  isLoading={loading}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Contact Info */}
          <VStack spacing={6} align="stretch">
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Flex align="center" gap={4} mb={4}>
                <Icon as={FaMapMarkerAlt} boxSize={6} color="blue.500" />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Address</Text>
                  <Text color="gray.600">
                    St. Francis of Assisi Church
                    <br />
                    Athipalayam Pirivu, Assisi Nagar
                    <br />
                    Ganapathy, Coimbatore – 641006
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Flex align="center" gap={4} mb={4}>
                <Icon as={FaPhone} boxSize={6} color="blue.500" />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Phone</Text>
                  <Text color="gray.600">0422‑2531533</Text>
                </Box>
              </Flex>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Flex align="center" gap={4} mb={4}>
                <Icon as={FaEnvelope} boxSize={6} color="blue.500" />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Email</Text>
                  <Text color="gray.600">contact@stfrancisassisichurch.in</Text>
                </Box>
              </Flex>
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
}
