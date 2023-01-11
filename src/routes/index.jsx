import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import Chart from "../pages/Chart";
import Home from "../pages/Home";
import "../App.scss";
import PageNotFound from "../pages/PageNotFound";
import RadioPage from "../pages/RadioPage";
import FollowPage from "../pages/FollowPage";
import NewFeeds from "../components/new-feeds/NewFeeds";
import PlayingBar from "../components/now-playing-bar/PlayingBar";
import Profile from "../pages/Profile";
import NewReleasePage from "../pages/NewReleasePage";
import { useSelector } from "react-redux";
import { actionSelector } from "../redux/selectors/selector";
import { useRef } from "react";
import _ from "lodash";
import { useEffect } from "react";
import DetailPlayListPage from "../pages/DetailPlayListPage";

const Layout = () => {
  const data = useSelector(actionSelector).audiosReducer;

  const mainRef = useRef();

  useEffect(() =>{
    if (data.encodeId) mainRef?.current?.classList.add("is-song");
  },[data.encodeId])
 

  return (
    <div className="main-layout" ref={mainRef}>
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
      <PlayingBar />
    </div>
  );
};

const publicRoutes = [
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
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
        errorElement: <PageNotFound />,
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
    path: "/follow/:nation",
    element: <Layout />,
    children: [
      {
        path: "/follow/:nation",
        element: <FollowPage />,
        children: [
          {
            path: ":id",
            element: <NewFeeds />,
          },
        ],
      },
    ],
  },
  {
    path: "/new-release",
    element: <Layout />,
    children: [
      {
        path: "/new-release",
        element: <NewReleasePage />,
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    path: "/play-list",
    element: <Layout />,
    children: [
      {
        path: "/play-list",
        element: <DetailPlayListPage />,
        errorElement: <PageNotFound />,
      },
    ],
  },
];
export { publicRoutes };
