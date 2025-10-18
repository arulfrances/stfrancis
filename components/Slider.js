import React from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/images/church.jpg", caption: "Welcome to St. Francis of Assisi Church" },
  { src: "/images/altar.jpg", caption: "Serve with Love and Faith" },
  { src: "/images/feast.jpg", caption: "Feast of St. Francis - October 4th" },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box maxW="container.lg" mx="auto" mb={8} borderRadius="md" overflow="hidden" boxShadow="md">
      <Slider {...settings}>
        {images.map(({ src, caption }, index) => (
          <Box key={index} position="relative">
            <Image src={src} alt={caption} objectFit="cover" w="100%" h={{ base: "250px", md: "400px" }} />
            <Text
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="rgba(0,0,0,0.5)"
              color="white"
              fontSize={{ base: "md", md: "xl" }}
              p={4}
              textAlign="center"
              fontWeight="semibold"
            >
              {caption}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
