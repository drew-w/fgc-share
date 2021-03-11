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
import { SpinnerIcon } from "@chakra-ui/icons";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import axios from "axios";

const username = () => {
  const user = useUser();
  const [state, setState] = useState({
    posts: [],
    savedPosts: [],
  });

  const getPosts = () => {
    axios
      .get("/api/post/myCombo", { params: { ID: user.id } })
      .then((res) => {
        setState({
          ...state,
          posts: res.data,
        });
        // console.log(res)
      })
      .catch((err) => console.log(err));

    axios
      .get("/api/post/mySavedPosts", { params: { ID: user.id } })
      .then((res) => {
        setState({
          ...state,
          savedPosts: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      getPosts();
    }
  }, [user]);

  const mapCombos = state.posts.map((e, i) => {
    return (
      <div key={i}>
        <ComboDisplay combo={e} currentUser={user} updatePosts={getPosts} />
      </div>
    );
  });

  const mapSaved = state.savedPosts.map((e, i) => {
    return (
      <div key={i}>
        <ComboDisplay combo={e} currentUser={user} updatePosts={getPosts} />
      </div>
    );
  });

  if (!user || state.posts === []) {
    return (
      <>
        <Header />
        <Flex justify="center" align="center">
          <SpinnerIcon w="200px" />
        </Flex>
      </>
    );
  }
  return (
    <>
      <Header username={user.username} />
      <Tabs variant="solid-rounded" colorScheme="orange" isFitted>
        <TabList>
          <Tab>My Combos</Tab>
          <Tab>Saved Combos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction="column">
              <Flex align="center" justify="center" direction="column">
                {mapCombos}
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column">
              <Flex align="center" justify="center" direction="column">
                {mapSaved}
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default username;
