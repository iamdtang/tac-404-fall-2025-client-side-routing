import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostForm from "./PostForm";

export default function CreatePostPage() {
  const navigate = useNavigate();

  return (
    <PostForm
      onSubmit={(newPost) => {
        fetch(`/posts`, {
          method: "POST",
          body: JSON.stringify({
            ...newPost,

            // likely would be set by the API based on the current logged in user
            userId: "1",
          }),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate("/");
          toast.success("You successfully created your post.");
        });
      }}
    />
  );
}
