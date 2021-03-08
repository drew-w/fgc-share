import DarkModeSwitcher from "./DarkModeSwitcher";
import { Flex, Box, Stack, Link, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LinkN from "next/link";
import { setUser } from "../redux/auth";
import axios from "axios";
import { useDispatch } from "react-redux";

const Header = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100vw"
      wrap="wrap"
      mb={10}
      p={8}
      boxShadow="dark-lg"
    >
      <Flex align="center">
        <Image
          src="https://i.ibb.co/1syZsVM/logo-simple.png"
          h="75px"
          my={-5}
          mx={10}
        />

        
        <Text>
          Hello, {/**/}
          <LinkN href={`/users/${username}`}>
            <Link color="orange.400">{username}</Link>
          </LinkN>
        </Text>


      </Flex>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          display={[
            isOpen ? "block" : "none",
            isOpen ? "block" : "none",
            "flex",
            "flex",
          ]}
          width={{ sm: "full", md: "auto" }}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          flexGrow={1}
        >
          <MenuItems>Home</MenuItems>

          <MenuItems>Create</MenuItems>

          <Link
            mt={{ base: 4, md: 0 }}
            mr={6}
            display="block"
            onClick={() => {
              axios.get("/api/auth/logout").then(() => {
                dispatch(setUser(null));
              });
            }}
          >
            Logout
          </Link>

          <DarkModeSwitcher />
        </Stack>
      </Box>

      <Box display={["block", "block", "none", "none"]} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
    </Flex>
  );
};

const MenuItems = ({ children }) => (
  <LinkN href={`/${children.toLowerCase()}`}>
    <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Link>
  </LinkN>
);

export default Header;
