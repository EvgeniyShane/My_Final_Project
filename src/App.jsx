import axios from "axios";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/posts/").then((res) => {
      setPosts(res.data.results);
    });
  }, []);

  return (
    <>
      <h1>Home</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            {parse(post.content)}
          </div>
        ))}
    </>
  );
};

export default App;
