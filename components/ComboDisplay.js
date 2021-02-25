import { Stack, Flex, Box, Button, Heading, Image } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import combo from "../inputs.json";
const ComboDisplay = () => {
  const mappedCombo = combo.map((e, i) => {
    return (
      <div key={i}>
        <Image src={e.image} h="50px" />
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
        borderColor="orange.500"
      >
        <Heading textAlign="center" mb={3}>
          TITLE OF THE COMBO
        </Heading>
        <Box boxShadow="inner" w="100%" p={8} backgroundColor="orange.100">
          <Flex direction="row" wrap="wrap">{mappedCombo}</Flex>
        </Box>
      </Box>
    </div>
  );
};

export default ComboDisplay;
