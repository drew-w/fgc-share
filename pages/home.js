import Header from "../components/Header";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import ComboDisplay from "../components/ComboDisplay";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const user = useUser();
  const [state, setState] = useState({
    posts: [],
  });

  const getPosts = () => {
    axios
      .get("/api/post/combo")
      .then((res) => {
        setState({
          ...state,
          posts: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      getPosts();
    }
  }, [user]);

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

  if (state.posts === []) {
    return (
      <>
        <Header />
        <Flex justify="center" align="center">
          <SpinnerIcon w="200px" />
        </Flex>
      </>
    );
  }

  const mapCombos = state.posts.map((e, i) => {
    return (
      <div key={i}>
        <ComboDisplay
          combo={e}
          currentUser={user}
          updatePosts={getPosts}
        />
      </div>
    );
  });

  const filterGames = (game) => {
    const filterGame = state.posts.filter(
      (combo) => combo.combo_details.game === game
    );
    const fgMapped = filterGame.map((e, i) => {
      return (
        <div key={i}>
          <Flex direction="column">
            <Flex align="center" justify="center" direction="column">
              <ComboDisplay
                combo={e}
                currentUser={user}
                updatePosts={getPosts}
              />
            </Flex>
          </Flex>
        </div>
      );
    });

    return fgMapped;
  };

  return (
    <>
      <Header username={user.username} />
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
              <Flex align="center" justify="center" direction="column">
                {mapCombos}
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column">
              <Flex align="center" justify="center" direction="column">
                {filterGames("GBVS")}
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>{filterGames("UNICLR")}</TabPanel>
          <TabPanel>{filterGames("SFV")}</TabPanel>
          <TabPanel>{filterGames("GGST")}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
