import axios from "axios";
import { useEffect, useState } from "react";

const APICalls = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response?.data);
    });
  }, []);
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.id}</p>
    </div>
  );
};

export default APICalls;
