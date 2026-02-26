import { useState } from "react";

function PostForm({ onAddPost }) {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.title.trim() === "") return;

    onAddPost(formData);

    setFormData({
      author: "",
      title: "",
      body: "",
      public: false
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="form-control mb-2"
        value={formData.author}
        onChange={handleChange}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        className="form-control mb-2"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="body"
        placeholder="Body"
        className="form-control mb-2"
        value={formData.body}
        onChange={handleChange}
      ></textarea>

      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="public"
          className="form-check-input"
          checked={formData.public}
          onChange={handleChange}
        />
        <label className="form-check-label">Public</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;