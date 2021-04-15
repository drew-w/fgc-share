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
import LinkN from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DarkModeSwitcher from "./DarkModeSwitcher";
import { setLoading, setUser } from "../redux/auth";

const Login = () => {
  const COLOR_SCHEME = "orange";
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { colorMode } = useColorMode();

  const login = () => {
    dispatch(setLoading(true));

    axios
      .post("/api/auth/login", state)
      .then((res) => {
        dispatch(setUser(res.data));
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("incorrect username or password");
        dispatch(setLoading(false));
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
      >
        <Image
          src={
            colorMode === "dark"
              ? "https://i.ibb.co/NC9kdGm/logo-black.png"
              : "https://i.ibb.co/DYBBwXN/logo.png"
          }
          height={["200px", "250px", "405px", "405px"]}
        />
      </Flex>

      <Box
        borderWidth={1}
        p={5}
        width={["380px", "400px", "400px", "500px"]}
        maxWidth="500px"
        borderRadius={4}
        boxShadow="dark-lg"
      >
        <DarkModeSwitcher />
        <Box>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
            <Text>
              <LinkN href="/register">
                <Link>Or Create an Account</Link>
              </LinkN>
            </Text>
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
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Box textAlign="center" m={2}>
                <LinkN href="/forgot">
                  <Link>Forgot Your Password?</Link>
                </LinkN>
              </Box>
              <Button
                width="full"
                mt={4}
                colorScheme={COLOR_SCHEME}
                onClick={login}
                disabled={isLoading}
              >
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
