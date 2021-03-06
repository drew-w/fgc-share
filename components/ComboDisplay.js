import {
  Stack,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Text,
  useColorMode,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";

const ComboDisplay = ({ combo, currentUser, updatePosts }) => {
  const { combo_id, combo_details, user_id } = combo;
  const { character, game, name, inputs } = combo_details;

  const { colorMode } = useColorMode();

  const [state, setState] = useState({
    isSaved: false,
    isOpen: false,
  });
  const deleteOpen = () => setState({ ...state, isOpen: !state.isOpen });
  const deleteClose = () => setState({ ...state, isOpen: false });

  const deletePost = () => {
    axios
      .delete(`/api/post/${combo_id}`)
      .then((res) => {
        console.log(res.data);
        deleteClose();
        updatePosts();
      })
      .catch((err) => console.log(err));
  };

  const mappedCombo = inputs.map((e, i) => {
    return (
      <div key={i}>
        <Image src={e.image} h={["25px", "30px", "50px", "50px"]} />
      </div>
    );
  });
  // console.log(currentUser)
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
          {name}
        </Heading>

        {currentUser.id === user_id ? (
          <Flex direction="row" align="center" justify="flex-end">
            <Button w={5} mx={2}>
              <EditIcon />
            </Button>

            <>
              <Popover
                returnFocusOnClose={false}
                isOpen={state.isOpen}
                onClose={deleteClose}
                placement="bottom-end"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <Button w={5} mx={2} onClick={deleteOpen}>
                    <DeleteIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">
                    Confirmation
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    Are you sure you want to delete this post?
                  </PopoverBody>
                  <PopoverFooter d="flex" justifyContent="flex-end">
                    <ButtonGroup size="sm">
                      <Button variant="outline" onClick={deleteClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" onClick={deletePost}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </>
          </Flex>
        ) : (
          <></>
        )}
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
          onClick={() => setState({ ...state, isSaved: !state.isSaved })}
        >
          {state.isSaved ? "Unsave" : "Save"}
        </Button>
      </Box>
    </div>
  );
};

export default ComboDisplay;
