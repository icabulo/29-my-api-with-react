import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { Home, UserDashboard } from "../pages";
// import { ComponentTest } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/favs",
    element: <UserDashboard />,
  },
  // {
  //   path: "/component-test",
  //   element: <ComponentTest />,
  // },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
