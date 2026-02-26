function PostItem({ post }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {post.author}
        </h6>
        <p className="card-text">{post.body}</p>
        <p>
          <strong>Status:</strong>{" "}
          {post.public ? "Public" : "Draft"}
        </p>
      </div>
    </div>
  );
}

export default PostItem;