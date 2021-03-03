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
import { useDispatch, useSelector } from "react-redux";

import DarkModeSwitcher from "../components/DarkModeSwitcher";
import { setLoading, setUser } from "../redux/auth";

const Register = () => {
  const COLOR_SCHEME = "orange";
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const register = () => {
    dispatch(setLoading(true));

    axios
      .post("/api/auth/register", state)
      .then((res) => {
        dispatch(setUser(res.data));
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("you suck!");
      });
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
                  value={state.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={state.username}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                width="full"
                mt={4}
                colorScheme={COLOR_SCHEME}
                onClick={register}
                disabled={isLoading}
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
