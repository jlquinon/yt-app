import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: "video",
          key: KEY,
        },
      })
      .then(({ data }) => {
        setVideos(data.items);
      });
  };

  return [videos, search];
};

export default useVideos;
