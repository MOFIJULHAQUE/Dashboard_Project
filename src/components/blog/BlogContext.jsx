import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [data, setData] = useState();

  const apiKey = `pub_13393cacdeb562c21d5ce9a7c508c26dc2441`;

  useEffect(() => {
    axios
      .get(
        ` https://newsdata.io/api/1/news?apikey=${apiKey}&q=Cryptocurrency&language=en `
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BlogContext.Provider value={{data}}>
      {props.children}
    </BlogContext.Provider>
  );
};
