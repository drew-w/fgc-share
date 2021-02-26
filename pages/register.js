import {
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
  } from "@chakra-ui/react";
  import LinkN from "next/link";
  
  import DarkModeSwitcher from "../components/DarkModeSwitcher";
  
  const Register = () => {
    const COLOR_SCHEME = "orange";
    return (
      <Flex
        direction={["column", "column", "row", "row"]}
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Flex
          direction={["column", "column", "row", "row"]}
          align="center"
          justify={["flex-end", "flex-end", "flex-start" ,"flex-start"]}
          m={5}
          mr={[5, 5, 10, 10]}
        >
        </Flex>
  
        <Box
          borderWidth={1}
          p={5}
          width={["380px", "400px", "600px", "600px"]}
          borderRadius={4}
          boxShadow="dark-lg"
        >
          <DarkModeSwitcher />
          <Box>
            <Box textAlign="center">
              <Heading>Sign Up</Heading>
            </Box>
            <Box>
              <form>
                <FormControl m={2}>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" placeholder="Email Address" />
                </FormControl>
                <FormControl m={2}>
                  <FormLabel>Username</FormLabel>
                  <Input type="username" placeholder="Username" />
                </FormControl>
                <FormControl m={2}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Password" />
                </FormControl>

                <LinkN href="/home">
                  <Button width="full" mt={4} colorScheme={COLOR_SCHEME}>
                    Sign Up
                  </Button>
                </LinkN>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default Register;
  