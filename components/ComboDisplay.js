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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const ComboDisplay = ({ combo, currentUser, updatePosts }) => {
  const { combo_id, combo_details, user_id } = combo;
  let { character, game, name, inputs } = combo_details;

  const { colorMode } = useColorMode();
  const nameCopy = (" " + name).slice(1);
  const gameCopy = (" " + game).slice(1);
  const charCopy = (" " + character).slice(1);
  const [state, setState] = useState({
    isSaved: false,
    isOpen: false,
    isEditing: false,

    name: nameCopy,
    game: gameCopy,
    character: charCopy,
  });

  useEffect(() => {
    if (currentUser) {
      axios
        .get("/api/post/savePosts", { params: { ID: currentUser.id } })
        .then((res) => {
          const savedPosts = res.data;

          for (let i = 0; i < savedPosts.length; i++) {
            if (savedPosts[i].saved_post_id === combo_id) {
              console.log(
                `the post id is ${combo_id}, the saved post id is ${savedPosts[i].saved_post_id}`
              );

              setState({ ...state, isSaved: true });
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  const deleteOpen = () => setState({ ...state, isOpen: !state.isOpen });
  const deleteClose = () => setState({ ...state, isOpen: false });
  const editPost = () => setState({ ...state, isEditing: !state.isEditing });

  const saveEdits = async () => {
    if (name !== state.name || character !== state.character) {
      name = state.name;
      character = state.character;

      await axios
        .put(`/api/post/${combo_id}`, { name, character })
        .then((res) => {
          updatePosts();
          setState({ ...state, isEditing: false });
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else setState({ ...state, isEditing: false });
  };

  const renderSwitch = (game) => {
    switch (game) {
      case "GBVS":
        return (
          <>
            <MenuItems>Gran</MenuItems>
            <MenuItems>Katalina</MenuItems>
            <MenuItems>Charlotta</MenuItems>
            <MenuItems>Lancelot</MenuItems>
            <MenuItems>Percival</MenuItems>
            <MenuItems>Ferry</MenuItems>
            <MenuItems>Lowain</MenuItems>
            <MenuItems>Ladiva</MenuItems>
            <MenuItems>Metera</MenuItems>
            <MenuItems>Zeta</MenuItems>
            <MenuItems>Vaseraga</MenuItems>
            <MenuItems>Beelzebub</MenuItems>
            <MenuItems>Narmaya</MenuItems>
            <MenuItems>Soriz</MenuItems>
            <MenuItems>Djeeta</MenuItems>
            <MenuItems>Zooey</MenuItems>
            <MenuItems>Belial</MenuItems>
            <MenuItems>Cagliostro</MenuItems>
            <MenuItems>Yuel</MenuItems>
          </>
        );
      case "UNICLR":
        return (
          <>
            <MenuItems>Hyde</MenuItems>
            <MenuItems>Linne</MenuItems>
            <MenuItems>Waldstein</MenuItems>
            <MenuItems>Carmine</MenuItems>
            <MenuItems>Orie</MenuItems>
            <MenuItems>Gordeau</MenuItems>
            <MenuItems>Merkava</MenuItems>
            <MenuItems>Vatista</MenuItems>
            <MenuItems>Seth</MenuItems>
            <MenuItems>Yuzuriha</MenuItems>
            <MenuItems>Hilda</MenuItems>
            <MenuItems>Chaos</MenuItems>
            <MenuItems>Nanase</MenuItems>
            <MenuItems>Byakuya</MenuItems>
            <MenuItems>Phonon</MenuItems>
            <MenuItems>Mika</MenuItems>
            <MenuItems>Wagner</MenuItems>
            <MenuItems>Enkidu</MenuItems>
            <MenuItems>Londrekia</MenuItems>
            <MenuItems>Eltnum</MenuItems>
            <MenuItems>Akatsuki</MenuItems>
          </>
        );
      case "SFV":
        return (
          <>
            <MenuItems>Ryu</MenuItems>
            <MenuItems>Chun-Li</MenuItems>
            <MenuItems>Nash</MenuItems>
            <MenuItems>M. Bison</MenuItems>
            <MenuItems>Cammy</MenuItems>
            <MenuItems>Birdie</MenuItems>
            <MenuItems>Ken</MenuItems>
            <MenuItems>Necalli</MenuItems>
            <MenuItems>Vega</MenuItems>
            <MenuItems>R. Mika</MenuItems>
            <MenuItems>Rashid</MenuItems>
            <MenuItems>Karin</MenuItems>
            <MenuItems>Zangief</MenuItems>
            <MenuItems>Laura</MenuItems>
            <MenuItems>Dhalsim</MenuItems>
            <MenuItems>FANG</MenuItems>
            <MenuItems>Alex</MenuItems>
            <MenuItems>Guile</MenuItems>
            <MenuItems>Ibuki</MenuItems>
            <MenuItems>Balrog</MenuItems>
            <MenuItems>Juri</MenuItems>
            <MenuItems>Urien</MenuItems>
            <MenuItems>Akuma</MenuItems>
            <MenuItems>Kolin</MenuItems>
            <MenuItems>Ed</MenuItems>
            <MenuItems>Abigail</MenuItems>
            <MenuItems>Menat</MenuItems>
            <MenuItems>Zeku</MenuItems>
            <MenuItems>Sakura</MenuItems>
            <MenuItems>Blanka</MenuItems>
            <MenuItems>Falke</MenuItems>
            <MenuItems>Cody</MenuItems>
            <MenuItems>G</MenuItems>
            <MenuItems>Sagat</MenuItems>
            <MenuItems>Kage</MenuItems>
            <MenuItems>E. Honda</MenuItems>
            <MenuItems>Lucia</MenuItems>
            <MenuItems>Poison</MenuItems>
            <MenuItems>Gill</MenuItems>
            <MenuItems>Seth</MenuItems>
            <MenuItems>Dan</MenuItems>
          </>
        );
      case "GGST":
        return (
          <>
            <MenuItems>Sol</MenuItems>
            <MenuItems>Ky</MenuItems>
            <MenuItems>May</MenuItems>
            <MenuItems>Axl</MenuItems>
            <MenuItems>Chipp</MenuItems>
            <MenuItems>Potemkin</MenuItems>
            <MenuItems>Faust</MenuItems>
            <MenuItems>Millia</MenuItems>
            <MenuItems>Zato</MenuItems>
            <MenuItems>Ramlethal</MenuItems>
            <MenuItems>Leo</MenuItems>
            <MenuItems>Nagoriyuki</MenuItems>
            <MenuItems>Giovanna</MenuItems>
            <MenuItems>Anji</MenuItems>
            <MenuItems>Ino</MenuItems>
          </>
        );
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

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

  const savePosts = () => {
    if (state.isSaved) {
      axios
        .delete("/api/post/savePosts", { data: { combo_id, currentUser } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      setState({ ...state, isSaved: false });
    } else {
      axios
        .post("api/post/savePosts", { combo_id, currentUser })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      setState({ ...state, isSaved: true });
    }
  };

  const MenuItems = ({ children }) => (
    <MenuItem onClick={() => setState({ ...state, character: children })}>
      {children}
    </MenuItem>
  );

  const mappedCombo = inputs.map((e, i) => {
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
        {state.isEditing ? (
          <Flex align="center" justify="center">
            <Input
              mb={4}
              w="400px"
              value={state.name}
              name="name"
              textAlign="center"
              onChange={handleChange}
            />
          </Flex>
        ) : (
          <Heading textAlign="center" mb={3}>
            {name}
          </Heading>
        )}
        {currentUser.id === user_id ? (
          <Flex direction="row" align="center" justify="flex-end">
            {state.isEditing ? (
              <Button w={5} mx={2} onClick={saveEdits}>
                <CheckIcon />
              </Button>
            ) : (
              <Button w={5} mx={2} onClick={editPost}>
                <EditIcon />
              </Button>
            )}

            {state.isEditing ? (
              <div></div>
            ) : (
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
            )}
          </Flex>
        ) : (
          <></>
        )}
        <Flex direction="row" justify="space-between" my={5}>
          <>
            <Text>
              Game: <Link color="orange.400">{game}</Link>
            </Text>

            {state.isEditing ? (
              <Flex dir="row" align="center" justifyContent="space-between">
                <Stack direction="row" align="center">
                  <Text>Character: </Text>
                  <Menu>
                    <MenuButton
                      colorScheme="orange"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {state.character}
                    </MenuButton>

                    <MenuList>{renderSwitch(state.game)}</MenuList>
                  </Menu>
                </Stack>
              </Flex>
            ) : (
              <Text>
                Character: <Link color="orange.400">{character}</Link>
              </Text>
            )}
          </>
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
        <Button w="full" colorScheme="orange" mt={5} onClick={savePosts}>
          {state.isSaved ? "Unsave" : "Save"}
        </Button>
      </Box>
    </div>
  );
};

export default ComboDisplay;
