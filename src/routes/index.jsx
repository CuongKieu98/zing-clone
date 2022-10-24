import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import Chart from "../pages/Chart";
import Home from "../pages/Home";
import "../App.scss";

const Layout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
};

const publicRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/zing-chart",
    element: <Layout />,
    children: [
      {
        path: "/zing-chart",
        element: <Chart />,
      },
    ],
  },
];
export { publicRoutes };
