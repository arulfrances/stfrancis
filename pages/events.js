import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Image,
  Link,
  Icon,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Badge,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { FiFileText } from "react-icons/fi";

const events = [
  {
    title: "2025 Annual Parish Patron Saint Feast",
    date: "October 12–19, 2025",
    description:
      "A week-long celebration including daily Mass, special prayers, community gatherings, and car processions.",
    images: [
      "/images/parish-feast-week2025.jpg",
      "/images/parish-feast-week2025-1.jpg",
    ],
    pdf: null,
  },
  {
    title: "2025 Lent Season Events",
    date: "March 5 – April 20, 2025",
    description: "2025 Lent Season Holy Events.",
    images: [],
    pdf: "/files/Lent2025Events.pdf",
  },
];

export default function Events() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    onOpen();
  };

  return (
    <Layout>
      <Box textAlign="center" mb={8}>
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, #3b82f6, #6366f1)"
          bgClip="text"
          lineHeight="1.3"
        >
          Church Events
        </Heading>
      </Box>

      <VStack spacing={8} align="stretch">
        {events.map(({ title, date, description, images, pdf }, index) => (
          <Box
            key={index}
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: "xl" }}
            transition="all 0.3s"
          >
            <Badge colorScheme="red" fontSize="sm" mb={2}>
              {date}
            </Badge>
            <Heading as="h2" size="lg" mb={4} color="gray.800">
              {title}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
              {description}
            </Text>

            {images.length > 0 && (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => openModal(img)}
                    _hover={{ transform: "scale(1.05)" }}
                    transition="all 0.2s"
                    fallbackSrc="https://via.placeholder.com/400x300?text=Event+Image"
                  />
                ))}
              </SimpleGrid>
            )}

            {pdf && (
              <Link
                href={pdf}
                isExternal
                color="blue.500"
                fontWeight="semibold"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "blue.700" }}
              >
                <Icon as={FiFileText} boxSize={5} />
                View Event PDF
              </Link>
            )}
          </Box>
        ))}
      </VStack>

      {/* Image Modal */}
      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton color="white" bg="red.500" />
            <ModalBody p={0}>
              <Image
                src={selectedImage}
                alt="Event"
                borderRadius="md"
                w="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Layout>
  );
}
