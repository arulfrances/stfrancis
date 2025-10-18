import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", path: "/" },
  { name: "Mass Timings", path: "/mass-timings" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const NavLink = ({ path, children }) => (
  <NextLink href={path} passHref>
    <Link
      px={3}
      py={2}
      rounded="md"
      _hover={{ textDecoration: "none", bg: "teal.600", color: "white" }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.600" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.lg" mx="auto">
        <Box fontWeight="bold" fontSize="xl" cursor="pointer">
          <NextLink href="/" passHref>
            <Link _hover={{ textDecoration: "none", color: "gray.200" }}>
              St. Francis of Assisi Church
            </Link>
          </NextLink>
        </Box>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="teal.600"
          _hover={{ bg: "teal.700" }}
        />

        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {Links.map(({ name, path }) => (
            <NavLink key={name} path={path}>
              {name}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} bg="teal.600">
          <Stack as="nav" spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={name} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
