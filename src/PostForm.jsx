import { useState } from "react";

export default function PostForm(props) {
  const [title, setTitle] = useState(props.post ? props.post.title : "");
  const [body, setBody] = useState(props.post ? props.post.body : "");

  return (
    <form
      method="post"
      onSubmit={(event) => {
        event.preventDefault();

        props.onSubmit({
          ...props.post,
          title,
          body,
        });
      }}
    >
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="body"
          style={{ height: "100px" }}
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <label htmlFor="body">Write your post here</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
