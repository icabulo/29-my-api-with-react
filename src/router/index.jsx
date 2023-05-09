import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { FavsForm } from "../components/FavsForm";
import { ComponentTest } from "../pages";

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
    element: <FavsForm />,
  },
  {
    path: "/component-test",
    element: <ComponentTest />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
