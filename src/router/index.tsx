import { createBrowserRouter } from "react-router-dom";

import SidebarLayout from "../layout/SidebarLayout";

import NotFoundPage from "../pages/not-found";
import PokeListPage from "../pages/poke-list";
import PokeDetailsPage from "../pages/poke-details";
import MyPoke from "../pages/my-poke"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <PokeListPage />,
      },
      {
        path: "poke/:pokeId",
        element: <PokeDetailsPage />,
      },
      {
        path: "poke/:pokeId",
        element: <PokeDetailsPage />,
      },
      {
        path: "poke/catched",
        element: <MyPoke />,
      },
    ],
  },
]);

export default router;
