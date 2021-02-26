import Header from "../components/Header";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ComboDisplay from "../components/ComboDisplay";

const home = () => {
  return (
    <>
      <Header />
      <Tabs variant="solid-rounded" colorScheme="orange" isFitted>
        <TabList>
          <Tab>All</Tab>
          <Tab>Granblue Fantasy</Tab>
          <Tab>Under Night In-Birth</Tab>
          <Tab>Street Fighter</Tab>
          <Tab>Guilty Gear</Tab>
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
                <ComboDisplay />
                <ComboDisplay />
                <ComboDisplay />
              </Flex>
              {/* 
        //! DELETE THE ABOVE ^^^^^^^^^
        */}
            </Flex>
          </TabPanel>
          <TabPanel>Only GranBlue</TabPanel>
          <TabPanel>Only UnderNight</TabPanel>
          <TabPanel>Only Street Fighter</TabPanel>
          <TabPanel>Only Guilty Gear</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default home;
