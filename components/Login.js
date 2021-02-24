import {
  Heading,
  Box,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <div>
      <Box textAlign="center">
        <Heading>Sign In</Heading>
        <Text>
          Or
          <Link> Create an Account</Link>
        </Text>
      </Box>
      <Box>
        <form>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Email Address" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Login;
