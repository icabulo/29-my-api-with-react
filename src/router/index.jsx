import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { ComponentTest, UserDashboard } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">Let&apos;s use react to cosume my FAVS-API</div>
    ),
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
  {
    path: "/component-test",
    element: <ComponentTest />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
