import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Screens Import:
import Authentication from "./screens/Authentication";
import FeedPage from "./screens/Feed";
import Layout from "./layout";
import PageNotFound from "./screens/PageNotFound";
import Search from "./screens/Search";
import Upload from "./screens/Upload";
import Profile from "./screens/Profile";
import Edit from "./screens/Profile/Edit";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <FeedPage />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/upload",
          element: <Upload />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/edit-profile",
          element: <Edit />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  // return <RouterProvider router={router} />;
  return <Authentication />;
};

export default App;
