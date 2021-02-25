import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";
import ComboDisplay from "../components/ComboDisplay";

const home = () => {
  return (
    <>
      <Header />
      <Flex direction="column">
        {/*
          // TODO GET ALL POSTS FROM DB AND DISPLAY THEM HERE
          */}
        {/* 
          //! These hardcoded components will be removed once the backend is finished
          */}
        <Flex align="center" justify="center" direction="column">
          <ComboDisplay />
          <ComboDisplay />
          <ComboDisplay />
          <ComboDisplay />
        </Flex>
        {/* 
        //! DELETE THE ABOVE ^^^^^^^^^
        */}
      </Flex>
    </>
  );
};

export default home;
