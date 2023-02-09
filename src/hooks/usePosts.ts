import axios from "axios";
import { useState, useEffect } from "react";
import type Post from "../types/posts";

const usePosts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  // fetch data
  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading };
};

export default usePosts;
