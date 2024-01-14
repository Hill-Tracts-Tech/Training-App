import { useEffect } from "react";

export const Redirection = (isLoggedIn, navigate) => {
  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);
};
