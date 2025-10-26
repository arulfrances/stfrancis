import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Box, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/images/StFrancisChurch.jpg", caption: "St. Francis of Assisi Church, Coimbatore" },
 // { src: "/images/church-interior.jpg", caption: "Our Beautiful Sanctuary" },
 // { src: "/images/sunday-mass.jpg", caption: "Join Us for Sunday Mass" },
 // { src: "/images/community.jpg", caption: "A Welcoming Community" },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 800,
    autoplay: images.length > 1,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  return (
    <Box
      mt={2}
      mb={8}
      sx={{
        ".slick-dots": {
          bottom: { base: "15px", md: "25px" },
          li: {
            button: {
              _before: {
                fontSize: "14px",
                color: "white",
                opacity: 0.6,
              },
            },
            "&.slick-active button:before": {
              color: "#3b82f6", // Blue to match header
              opacity: 1,
              transform: "scale(1.2)",
            },
          },
        },
      }}
    >
      <Slider {...settings}>
        {images.map(({ src, caption }, index) => (
          <Box key={index}>
            <Box
              position="relative"
              height={{ base: "350px", md: "500px", lg: "600px" }}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              border="2px solid"
              borderColor="blue.100"
            >
              <Image
                src={src}
                alt={caption}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1280px"
              />

              {/* Modern gradient overlay matching theme */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="50%"
                bgGradient="linear(to-t, rgba(30, 58, 138, 0.9), transparent)"
                pointerEvents="none"
              />

              {/* Caption with blue theme styling */}
              <Box
                position="absolute"
                bottom={{ base: 8, md: 12 }}
                left={{ base: 6, md: 10 }}
                right={{ base: 6, md: 10 }}
              >
                <Text
                  color="white"
                  bg="rgba(30, 58, 138, 0.7)" // Blue matching header
                  px={{ base: 4, md: 8 }}
                  py={{ base: 3, md: 4 }}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
                  backdropFilter="blur(10px)"
                  textShadow="2px 2px 8px rgba(0,0,0,0.5)"
                  letterSpacing="tight"
                  borderLeft="4px solid"
                  borderColor="blue.300"
                  textAlign="center"
                >
                  {caption}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
