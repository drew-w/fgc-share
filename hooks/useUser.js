import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { setUser } from "../redux/auth";
import axios from "axios";

export function useUser() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const { data: fetchedUser } = await axios.get("/api/auth/user");

      //? the OR instead of AND seems to work. Might break once login works
      if (!user && !fetchedUser) {
        Router.push("/");
      }

      if (!user) {
        dispatch(setUser(fetchedUser));
      } else if (!fetchedUser) {
        dispatch(setUser(null));
        Router.push("/");
      } else if (fetchedUser.id !== user.id) {
        dispatch(setUser(fetchedUser));
      }
    };

    loadUser();
  }, [user]);

  return user;
}
