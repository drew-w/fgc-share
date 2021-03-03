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
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import DarkModeSwitcher from "../components/DarkModeSwitcher";

const Register = () => {
  const COLOR_SCHEME = "orange";
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const register = () => {
    axios.post("/api/auth/register", state)
    .then(res => {
      alert(res)
      console.log(res.data)
      // router.push("/home")
    })
    .catch(err => {
      console.log(err)
      alert("you suck!")
    })
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

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
        justify={["flex-end", "flex-end", "flex-start", "flex-start"]}
        m={5}
        mr={[5, 5, 10, 10]}
      ></Flex>

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
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                width="full"
                mt={4}
                colorScheme={COLOR_SCHEME}
                onClick={register}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
