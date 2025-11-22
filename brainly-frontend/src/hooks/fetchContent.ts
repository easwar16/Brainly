import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useContent = () => {
  const token = `Bearer ${localStorage.getItem("brainlyToken")}`;
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log(response);
        setContents(response.data.content);
      });
    // console.log(response);
  }, []);

  return contents;
};
