import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import Chart from "../pages/Chart";
import Home from "../pages/Home";
import "../App.scss";
import PageNotFound from "../pages/PageNotFound";

const Layout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <Header />
      <div className="main-page">
        <div className="wrapper">
          <main className="page-section">
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
];
export { publicRoutes };
