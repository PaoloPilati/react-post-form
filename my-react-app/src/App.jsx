import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <>
      <Header />
      <Main posts={posts} onAddPost={addPost} />
    </>
  );
}

export default App;