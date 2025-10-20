import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./IndexPage";
import ContactPage from "./ContactPage";
import PostDetailsPage from "./PostDetailsPage";
import "react-toastify/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import Root from "./Root";
import CreatePostPage from "./CreatePostPage";
import EditPostPage from "./EditPostPage";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
        loader() {
          return fetch("/posts?_expand=user").then((response) => {
            return response.json();
          });
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/posts/:postId",
        loader({ params }) {
          return fetch(
            `/posts/${params.postId}?_expand=user&_embed=comments`
          ).then((response) => {
            return response.json();
          });
        },
        element: <PostDetailsPage />,
      },
      {
        path: "/write",
        element: <CreatePostPage />,
      },
      {
        path: "/posts/:postId/edit",
        loader({ params }) {
          return fetch(`/posts/${params.postId}`).then((response) => {
            return response.json();
          });
        },
        element: <EditPostPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
