import { Box, Heading, SimpleGrid, Text, AspectRatio } from "@chakra-ui/react";
import Layout from "../components/Layout";

const sermons = [
  { title: "Holy Mass – 1 Dec 2024", videoId: "iJJHcGIOYb4" },
  { title: "Sunday Mass – 27 Apr 2025", videoId: "Td2YlMy4DUw" },
  { title: "Holy Mass – 16 Feb 2025", videoId: "PPakSUQyZss" },
];

export default function Sermons() {
  return (
    <Layout>
      <Heading mb={6}>Sermon Archive</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {sermons.map(({ title, videoId }) => (
          <Box key={videoId} shadow="md" rounded="md" overflow="hidden">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </AspectRatio>
            <Box p={4}>
              <Text fontWeight="semibold">{title}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
