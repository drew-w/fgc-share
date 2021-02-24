import {
  Heading,
  Box,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useColorMode,
  Image,
} from "@chakra-ui/react";

import DarkModeSwitcher from "./DarkModeSwitcher";

const Login = () => {
  const COLOR_SCHEME = "orange";
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="row"
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
    >
      <Box boxSize="sm">
        <Image
          src={
            colorMode === "dark"
              ? "https://i.ibb.co/NC9kdGm/logo-black.png"
              : "https://i.ibb.co/DYBBwXN/logo.png"
          }
          height="300px"
        />
      </Box>
      <Box
        borderWidth={1}
        p={5}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        boxShadow="dark-lg"
      >
        <DarkModeSwitcher />
        <Box>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
            <Text>
              <Link>Or Create an Account</Link>
            </Text>
          </Box>
          <Box>
            <form>
              <FormControl m={2}>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" placeholder="Email Address" />
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Password" />
              </FormControl>

              <Box textAlign="center" m={2}>
                <Link>Forgot Your Password?</Link>
              </Box>

              <Button width="full" mt={4} colorScheme={COLOR_SCHEME}>
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
