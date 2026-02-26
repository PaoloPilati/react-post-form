import PostItem from "./PostItem.jsx";

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>No posts yet...</p>;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

export default PostList;