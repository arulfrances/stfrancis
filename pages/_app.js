import React from "react";
import PropTypes from "prop-types";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

// Custom theme configuration matching your modern blue gradient theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
      a: {
        color: "blue.500",
        _hover: {
          color: "blue.600",
          textDecoration: "none",
        },
      },
    },
  },
  colors: {
    brand: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6", // matches your header & action color
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e3a8a", // darker tone used for footer & header gradients
      900: "#172554",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        color: "gray.800",
      },
      variants: {
        gradient: {
          bgGradient: "linear(to-r, brand.500, brand.700)",
          bgClip: "text",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "xl",
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bgGradient: "linear(to-r, brand.500, brand.700)",
          color: "white",
          _hover: {
            bgGradient: "linear(to-r, brand.600, brand.800)",
            boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
            transform: "translateY(-2px)",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.600",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Official website of St. Francis of Assisi Church Coimbatore. Mass timings, sermons, events and contact details."
        />
        <link rel="canonical" href="https://www.stfrancisassisichurch.in/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="St. Francis of Assisi Church Coimbatore" />
        <meta
          property="og:description"
          content="Mass timings, sermons, events and more."
        />
        <meta property="og:url" content="https://www.stfrancisassisichurch.in/" />
        <meta name="twitter:title" content="St. Francis of Assisi Church Coimbatore" />
        <meta
          name="twitter:description"
          content="Mass timings, sermons, events and more."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
