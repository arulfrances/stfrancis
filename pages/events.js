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
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/Layout";
import { FiFileText } from "react-icons/fi";


const events = [
  {
    title: "Parish Feast Week",
    date: "October 12-19 2025",
    description:
      "A week-long celebration including daily Mass, special prayers, community gatherings, and car processions.",
    images: [
      "/images/parish-feast-week2025.jpg",
      "/images/parish-feast-week2025-1.jpg"
    ],
    pdf: null,
  },
  {
    title: "2025 Lent Season Events ",
    date: "March 5 - April 20, 2025",
    description: "2025 Lent Season Holy Events",
    images: [],
     pdf: "/files/Lent2025Events.pdf",
  }


];

export default function Events() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(img) {
    setSelectedImage(img);
    onOpen();
  }

  return (
    <Layout>
      <Heading mb={6}>Upcoming Events</Heading>
      <VStack spacing={6} maxW="600px" mx="auto" align="stretch">
        {events.map(({ title, date, description, images, pdf }) => (
          <Box
            key={title}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {date}
            </Text>
            <Text mt={2}>{description}</Text>

            {images.length > 0 && (
              <SimpleGrid
                columns={images.length > 3 ? 3 : images.length}
                spacing={2}
                mt={4}
              >
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`${title} image ${idx + 1}`}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => openModal(img)}
                    _hover={{ opacity: 0.8 }}
                  />
                ))}
              </SimpleGrid>
            )}

            {pdf && (
              <Link
                href={pdf}
                isExternal
                mt={4}
                display="inline-flex"
                alignItems="center"
                color="teal.600"
                fontWeight="semibold"
              >
                <Icon as={FiFileText} mr={2} />
                View Event PDF
              </Link>
            )}
          </Box>
        ))}
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Enlarged event"
                maxH="80vh"
                mx="auto"
                borderRadius="md"
                objectFit="contain"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
}