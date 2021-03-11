import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

import DarkModeSwitcher from "../components/DarkModeSwitcher";

const forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState();

  const recoverPassword = () => {
    axios
      .post("/api/send", { email })
      .then((res) => {
        console.log(res);
        alert(res.data);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  const COLOR_SCHEME = "orange";

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
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
            <Heading>Forgot Password?</Heading>
            <Text m={3}>
              Enter your email address here. We'll reset your account. You will
              get an email with more instructions{" "}
            </Text>
          </Box>
          <Box my={5}>
            <form>
              <FormControl m={2}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                width="full"
                mt={4}
                colorScheme={COLOR_SCHEME}
                onClick={recoverPassword}
              >
                Reset Account
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default forgot;
