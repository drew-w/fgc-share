import {
  Input,
  Flex,
  Box,
  Button,
  Heading,
  Image,
  useColorMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import inputsGBVS from "../temp/inputs.json";
import inputsUNI from "../temp/inputs-uni.json";
import inputsSFV from "../temp/inputs-sf.json";
import inputsGG from "../temp/inputs-gg.json";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ComboBuilder = ({userID}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [current, addToCurrent] = useState([]);
  const [currentGame, selectGame] = useState("GBVS");
  const [currentChar, selectChar] = useState("Gran");
  const [inputs, changeInputs] = useState(inputsGBVS);
  const [value, setValue] = useState("");

  let mappedInputs = inputs.map((e) => {
    if (e.id > 2) {
      return (
        <div key={e.id}>
          <Image
            src={e.image}
            onClick={() => addToCombo(e)}
            h={["25px", "30px", "50px", "50px"]}
            m={5}
          />
        </div>
      );
    }
  });

  const mappedCurrent = current.map((e, i) => {
    return (
      <div key={i}>
        <Image src={e.image} h={["25px", "30px", "50px", "50px"]} />
      </div>
    );
  });

  const addToCombo = (newInput) => {
    let copy = [...current];
    copy.push(newInput);
    if (newInput.type === "direction") {
      copy.push(inputs[0]);
    } else if (newInput.type === "button") {
      copy.push(inputs[1]);
    }
    addToCurrent(copy);
  };

  const clearCombo = () => {
    addToCurrent([]);
    setValue("");
  };

  const saveCombo = () => {
    const newCombo = {
      name: value,
      game: currentGame,
      character: currentChar,
      inputs: current,
      id: userID,
    };
    alert(userID)
    axios
      .post("/api/post/combo", newCombo)
      .then(() => {
        clearCombo();
        router.push("/home");
      })
      .catch((err) => console.log(err));
  };

  const MenuItems = ({ children }) => (
    <MenuItem onClick={() => selectChar(children)}>{children}</MenuItem>
  );

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

  const selectGameFunction = (newGame) => {
    selectGame(newGame);
    switch (newGame) {
      case "GBVS":
        changeInputs(inputsGBVS);
        selectChar("Gran");
        return;
      case "UNICLR":
        changeInputs(inputsUNI);
        selectChar("Hyde");
        return;
      case "SFV":
        changeInputs(inputsSFV);
        selectChar("Ryu");
        return;
      case "GGST":
        changeInputs(inputsGG);
        selectChar("Sol");
        return;
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      borderWidth={3}
      m={5}
      p={[5, 5, 5, 5]}
      width={["380px", "400px", "400px", "full"]}
      borderRadius={4}
      boxShadow="xs"
      colorScheme="orange"
      borderColor={colorMode === "dark" ? "orange.300" : "orange.500"}
    >
      <Heading textAlign="center" mb={5}>
        Click on an image to add to your combo!
      </Heading>
      <Flex direction="row" justify="space-around" align="center" mb={5}>
        <Stack direction="row" align="center">
          <Text>Game: </Text>
          <Menu>
            <MenuButton
              colorScheme="orange"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {currentGame}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => selectGameFunction("GBVS")}>
                GBVS
              </MenuItem>
              <MenuItem onClick={() => selectGameFunction("UNICLR")}>
                UNICLR
              </MenuItem>
              <MenuItem onClick={() => selectGameFunction("SFV")}>SFV</MenuItem>
              <MenuItem onClick={() => selectGameFunction("GGST")}>
                GGST
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack direction="row" align="center">
          <Text>Character: </Text>
          <Menu>
            <MenuButton
              colorScheme="orange"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {currentChar}
            </MenuButton>

            <MenuList>{renderSwitch(currentGame)}</MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Box
        boxShadow="inner"
        w="100%"
        p={8}
        backgroundColor={colorMode === "dark" ? "gray.300" : "orange.100"}
      >
        <Flex direction="row" wrap="wrap" justify="space-evenly">
          {mappedInputs}
        </Flex>
      </Box>

      <Flex direction="row" justify="center">
        <Input
          mt={8}
          placeholder="Combo Title:"
          w="lg"
          onChange={handleChange}
          value={value}
        />
      </Flex>

      <Box
        boxShadow="inner"
        w="100%"
        p={8}
        backgroundColor={colorMode === "dark" ? "gray.300" : "orange.100"}
        minHeight={["200px", "200px", "300px", "400px"]}
        mt={8}
      >
        <Flex direction="row" wrap="wrap">
          {mappedCurrent}
        </Flex>
      </Box>
      <Flex direction="row" justify="space-evenly">
        <Button
          w={["xs", "sm", "lg", "lg"]}
          mt={5}
          colorScheme="orange"
          onClick={saveCombo}
        >
          Save
        </Button>
        <Button
          w={["xs", "sm", "lg", "lg"]}
          mt={5}
          colorScheme="orange"
          onClick={clearCombo}
        >
          Clear
        </Button>
      </Flex>
    </Box>
  );
};

export default ComboBuilder;
