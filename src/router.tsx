import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import { PATH_ROOT } from "./routes/paths";
import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Posts from "./routes/posts";
import PostPage from "./routes/post";

export const router = createBrowserRouter([
  {
    path: PATH_ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Portfolio />,
        path: "/portfolio",
      },
      {
        element: <Posts />,
        path: "/posts",
      },
      {
        element: <PostPage />,
        path: "/posts/:postId",
      },
    ],
  },
]);
