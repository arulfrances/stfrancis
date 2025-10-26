import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Text,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaChurch } from "react-icons/fa";

const Links = [
  { name: "Home", path: "/" },
  { name: "About Parish", path: "/about" },
  { name: "Mass Timings", path: "/mass-timings" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const NavLink = ({ path, children, onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <NextLink href={path} passHref legacyBehavior>
      <ChakraLink
        px={4}
        py={2}
        rounded="lg"
        fontWeight="semibold"
        fontSize="md"
        letterSpacing="wide"
        color="whiteAlpha.900"
        bg={isActive ? "whiteAlpha.200" : "transparent"}
        borderBottom={isActive ? "3px solid" : "none"}
        borderColor="blue.300"
        transition="all 0.3s ease"
        _hover={{
          bg: "whiteAlpha.300",
          transform: "translateY(-2px)",
          boxShadow: "lg",
          textDecoration: "none",
        }}
        _focus={{
          outline: "2px solid",
          outlineColor: "blue.300",
          outlineOffset: "2px",
        }}
        onClick={onClick}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bgGradient="linear(to-r, #1e3a8a, #3b82f6, #6366f1)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
      position="sticky"
      top={0}
      zIndex={100}
      w="100%"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        {/* Logo and Title */}
        <Flex alignItems="center" gap={3}>
          <Icon as={FaChurch} boxSize={7} color="blue.200" />
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "md", md: "2xl" }}
            color="white"
            letterSpacing="tight"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            St. Francis of Assisi Church
          </Text>
        </Flex>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={2} display={{ base: "none", md: "flex" }}>
          {Links.map(({ name, path }) => (
            <NavLink key={path} path={path}>
              {name}
            </NavLink>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ md: "none" }}
          onClick={onOpen}
          bg="whiteAlpha.200"
          color="white"
          _hover={{ bg: "whiteAlpha.400" }}
          _active={{ bg: "whiteAlpha.500" }}
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bgGradient="linear(to-b, #1e3a8a, #3b82f6)">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            color="white"
            borderBottomWidth="1px"
            borderColor="whiteAlpha.300"
            fontSize="xl"
            fontWeight="bold"
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={6}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path} onClick={onClose}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
