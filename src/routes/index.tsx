import { useRoutes } from "react-router-dom";
import Case from "../pages/Case";
import OpenCase from "../pages/OpenCase";
import { RoutesPaths } from "./types";

const routesPaths: RoutesPaths = [
  {
    name: "Caixa",
    path: "/",
    element: <Case />,
  },
  {
    name: "Abertura da Caixa",
    path: "/opening-case",
    element: <OpenCase />,
  },
];

function Routes() {
  const routes = useRoutes(routesPaths);
  return routes;
}

export default Routes;
