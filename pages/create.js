import Header from "../components/Header";
import ComboBuilder from "../components/comboBuilder";
import { Flex } from "@chakra-ui/react";

const create = () => {
  return (
    <>
      <Header />
      <Flex direction="column" justify="center" align="center">
        <ComboBuilder />
      </Flex>
    </>
  );
};

export default create;
