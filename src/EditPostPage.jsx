import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostForm from "./PostForm";

export default function EditPostPage() {
  const post = useLoaderData();
  const navigate = useNavigate();

  return (
    <PostForm
      post={post}
      onSubmit={(updatedPost) => {
        fetch(`/posts/${post.id}`, {
          method: "PATCH",
          body: JSON.stringify(updatedPost),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate(`/posts/${post.id}`);
          toast.success("Your post was successfully updated.");
        });
      }}
    />
  );
}
