import Header from "../../components/Header";
import ComboDisplay from "../../components/ComboDisplay";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const username = () => {
  return (
    <>
      <Header />
      <Tabs variant="solid-rounded" colorScheme="orange" isFitted>
        <TabList>
          <Tab>My Combos</Tab>
          <Tab>Saved Combos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction="column">
              {/*
          // TODO GET ALL POSTS FROM DB AND DISPLAY THEM HERE
          */}
              {/* 
          //! These hardcoded components will be removed once the backend is finished
          */}
              <Flex align="center" justify="center" direction="column">
                <ComboDisplay />
              </Flex>
              {/* 
        //! DELETE THE ABOVE ^^^^^^^^^
        */}
            </Flex>
          </TabPanel>
          <TabPanel>Saved Combos here</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default username;
