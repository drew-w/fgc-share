import {
  Stack,
  Flex,
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
// TODO once the database is setup, check session user id and combo creator id, and
// TODO if they are the same, allow editing and render these icons:
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

//! ----------------------------------------------
import comboInfo from "../inputs.json";
// ! the above input from inputs.json will be removed and replaced with
//! an axios call to the server

const ComboDisplay = () => {
  // TODO replace the destructured object below with an axios call
  const { comboName, game, character, moves } = comboInfo;
  // TODO ---------------------------------
  const { colorMode } = useColorMode();
  const [isSaved, setIsSaved] = useState(false);

  const mappedCombo = moves.map((e, i) => {
    return (
      <div key={i}>
        <Image src={e.image} h={["25px", "30px", "50px", "50px"]} />
      </div>
    );
  });

  return (
    <div>
      <Box
        borderWidth={3}
        m={5}
        p={[5, 5, 5, 5]}
        width={["380px", "400px", "400px", "800px"]}
        borderRadius={4}
        boxShadow="xs"
        colorScheme="orange"
        borderColor={colorMode === "dark" ? "orange.300" : "orange.500"}
      >
        <Heading textAlign="center" mb={3}>
          {comboName}
        </Heading>
        <Flex direction="row" justify="space-between" my={5}>
          <Stack direction="row">
            <Text>
              Game: <Link color="orange.400">{game}</Link>
            </Text>
          </Stack>

          <Text>
            Character: <Link color="orange.400">{character}</Link>
          </Text>
        </Flex>
        <Box
          boxShadow="inner"
          w="100%"
          p={8}
          backgroundColor={colorMode === "dark" ? "gray.300" : "orange.100"}
        >
          <Flex direction="row" wrap="wrap">
            {mappedCombo}
          </Flex>
        </Box>
        <Button
          w="full"
          colorScheme="orange"
          mt={5}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? "Unsave" : "Save"}
        </Button>
      </Box>
    </div>
  );
};

export default ComboDisplay;
