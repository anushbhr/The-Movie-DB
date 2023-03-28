import { useState, useEffect } from "react";
export const useSavedFavs = () => {
  const [myFavs, setMyFavs] = useState([]);

  useEffect(() => {
    localStorage.setItem("myfavs", JSON.stringify(myFavs));
  }, [myFavs]);
  return [myFavs, setMyFavs];
};
