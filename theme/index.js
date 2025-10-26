import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e9f5ff",
      100: "#bde0fe",
      200: "#91cbfd",
      300: "#65b6fc",
      400: "#359efa",
      500: "#1a73e8", // Primary blue
      600: "#155cc1",
      700: "#0f4699",
      800: "#093072",
      900: "#041a4b",
    },
    accent: {
      green: "#34A853",
      yellow: "#FBBC05",
      red: "#EA4335",
      gray: "#F1F3F4",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
      a: {
        color: "brand.500",
        _hover: { textDecoration: "underline" },
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.600" },
        },
      },
    },
  },
});

export default theme;
