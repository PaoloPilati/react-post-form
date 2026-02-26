import PostForm from "./PostForm";
import PostList from "./PostList";

function Main({ posts, onAddPost }) {
  return (
    <main className="container mt-4">
      <PostForm onAddPost={onAddPost} />
      <hr />
      <PostList posts={posts} />
    </main>
  );
}

export default Main;