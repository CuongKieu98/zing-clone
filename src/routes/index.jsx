import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import Chart from "../pages/Chart";
import Home from "../pages/Home";
import "../App.scss";
import PageNotFound from "../pages/PageNotFound";
import RadioPage from "../pages/RadioPage";
import FollowPage from "../pages/FollowPage";

const Layout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <Header />
      <div className="main-page">
        <div className="wrapper">
          <main className="page-section" id="boxm">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
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
    errorElement: <PageNotFound />,
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
  {
    path: "/radio",
    element: <Layout />,
    children: [
      {
        path: "/radio",
        element: <RadioPage />,
      },
    ],
  },
  {
    path: "/follow",
    element: <Layout />,
    children: [
      {
        path: "/follow",
        element: <FollowPage />,
      },
    ],
  },
];
export { publicRoutes };
