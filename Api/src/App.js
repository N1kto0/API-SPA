import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./routes/Users/Users";
import Albums from "./routes/Albums/Albums";
import User from "./routes/User/User";
import Album from "./routes/Album/Album";
import Layout from "./routes/Layout/Layout";
import NotFound from "./routes/NotFound/NotFound";
import { loader as usersLoader } from "./routes/Users/Users";
import { loader as albumsLoader } from "./routes/Albums/Albums";
import { loader as userLoader } from "./routes/User/User";
import { loader as albumLoader } from "./routes/Album/Album";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums></Albums>,
        errorElement: <NotFound></NotFound>
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User></User>,
        errorElement: <NotFound></NotFound>
      },
      {
        path: "albums/:id",
        loader: albumLoader,
        element: <Album></Album>,
        errorElement: <NotFound></NotFound>
      },
      {
        path: "/",
        loader: usersLoader,
        element: <Users></Users>,
        errorElement: <NotFound></NotFound>
      }
    ]
  }
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
