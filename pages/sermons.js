import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  AspectRatio,
  VStack,
  Text,
  Button,
  Link,
  Spinner,
  Center,
  Badge,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaYoutube, FaPlay } from "react-icons/fa";
import Layout from "../components/Layout";

export default function Sermons() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Verified channel ID for St. Francis of Assisi Church Coimbatore YouTube page (@sfaccbe)
  const CHANNEL_ID = "UCugJpZ2HJKLTStvnu26WVRQ";
  const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@sfaccbe";

  // ⚙️ YouTube API key (replace with your own to avoid quota issues)
  const API_KEY = "AIzaSyAKbX_OXVi3UF6XuCX-13PWWaFN1SPU0rs";

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&maxResults=9&q=stfrancisassisichurch&key=${API_KEY}`
        );

        const data = await response.json();

        if (data.error) {
          throw new Error(
            data.error.message || "YouTube API request failed."
          );
        }

        if (data.items?.length > 0) {
          setVideos(data.items);
        } else {
          setError("No Mass recordings currently available.");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err.message || "Failed to load videos.");
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <Layout>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            lineHeight="1.3"
            bgGradient="linear(to-r, #1e3a8a, #3b82f6)"
            bgClip="text"
          >
            Mass Recordings & Sermons
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Watch Holy Mass recordings and sermons from St. Francis of Assisi Church, Coimbatore.
          </Text>

          {/* Channel button */}
          <Button
            as={Link}
            href={YOUTUBE_CHANNEL_URL}
            isExternal
            leftIcon={<FaYoutube />}
            bgGradient="linear(to-r, #1e3a8a, #3b82f6)"
            color="white"
            size="lg"
            fontWeight="bold"
            px={8}
            py={6}
            _hover={{
              bgGradient: "linear(to-r, #3b82f6, #6366f1)",
              transform: "translateY(-3px)",
              boxShadow: "0 8px 20px rgba(59,130,246,0.3)",
              textDecoration: "none",
            }}
          >
            Visit Our YouTube Channel
          </Button>
        </Box>

        {/* Error message */}
        {error && (
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            <Box>
              <AlertTitle>Video Fetch Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Box>
          </Alert>
        )}

        {/* Loading state */}
        {loading && !error && (
          <Center py={20}>
            <VStack spacing={4}>
              <Spinner size="xl" color="blue.500" />
              <Text color="gray.600" fontSize="lg">
                Loading Mass recordings...
              </Text>
            </VStack>
          </Center>
        )}

        {/* No results */}
        {!loading && !error && videos.length === 0 && (
          <Box
            bg="white"
            p={10}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Icon as={FaYoutube} boxSize={14} color="gray.400" mb={4} />
            <Text fontSize="xl" fontWeight="semibold" color="gray.700">
              No videos available right now.
            </Text>
            <Text fontSize="md" color="gray.500" mt={2}>
              Please check later or visit our YouTube channel directly.
            </Text>
          </Box>
        )}

        {/* Video grid */}
        {!loading && !error && videos.length > 0 && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {videos.map((video) => (
              <Box
                key={video.id.videoId}
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                overflow="hidden"
                border="2px solid"
                borderColor="blue.100"
                _hover={{
                  borderColor: "blue.300",
                  transform: "translateY(-6px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s ease"
              >
                {/* Video */}
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </AspectRatio>

                {/* Details */}
                <Box p={5}>
                  <Badge
                    colorScheme="blue"
                    mb={2}
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="0.75rem"
                  >
                    <Icon as={FaPlay} mr={1} /> Holy Mass
                  </Badge>
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    noOfLines={2}
                    color="gray.800"
                    mb={3}
                  >
                    {video.snippet.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    📅 {new Date(video.snippet.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}

        {/* Footer info */}
        <Box
          bg="blue.50"
          p={8}
          borderRadius="xl"
          textAlign="center"
          borderLeft="4px solid"
          borderColor="blue.500"
        >
          <Text fontSize="lg" fontWeight="semibold" color="gray.700">
            Subscribe to our channel for weekly Mass recordings.
          </Text>
          <Text fontSize="md" color="gray.600">
            Get notified when new videos are uploaded from our parish.
          </Text>
        </Box>
      </VStack>
    </Layout>
  );
}
