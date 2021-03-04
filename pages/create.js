import Header from "../components/Header";
import ComboBuilder from "../components/comboBuilder";
import { Flex } from "@chakra-ui/react";
import { useUser } from "../hooks/useUser";
import {SpinnerIcon} from '@chakra-ui/icons'

const create = () => {
  const user = useUser();

  if (!user) {
    return (
      <>
        <Header />
        <Flex justify="center" align="center">
          <SpinnerIcon w="200px" />
        </Flex>
      </>
    );
  }
  console.log(user)
  return (
    <>
      <Header username={user.username} />
      <Flex direction="column" justify="center" align="center">
        <ComboBuilder userID={user.id}/>
        
      </Flex>
    </>
  );
};

export default create;
