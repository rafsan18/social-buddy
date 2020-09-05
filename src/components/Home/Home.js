import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>This is home</h1>
      {posts.map((post) => (
        <Posts post={post}></Posts>
      ))}
    </div>
  );
};

export default Home;
