import { useContext, useEffect } from "react";
import { router } from "expo-router";
import { AuthContext } from "../contexts/AuthContext";

export default function Index() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return null;
}