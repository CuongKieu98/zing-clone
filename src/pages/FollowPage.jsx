import React, { useCallback, useEffect, useState } from "react";
import { getNewFeeds } from "../api/musicApi";
import CardFeed from "../components/feeds-card/CardFeed";
import NavTabs from "../components/nav-tabs/NavTabs";
import "../scss/_follow.scss";
import Masonry from "@mui/lab/Masonry";
import { v4 as uuidv4 } from "uuid";
import { useParams, Outlet } from "react-router-dom";

const CATEGORY = [
  {
    title: "VIỆT NAM",
    link: "/follow/Viet-Nam/IWZ9Z08I",
    nation:"Viet-Nam"
  },
  {
    title: "US-UK",
    link: "/follow/Au-My/IWZ9Z08O",
    nation:"Au-My"
  },
  {
    title: "K-POP",
    link: "/follow/Han-Quoc/IWZ9Z08W",
    nation:"Han-Quoc"
  },
  {
    title: "HOA NGỮ",
    link: "/follow/Hoa-Ngu/IWZ9Z08U",
    nation:"Hoa-Ngu"
  },
];

const FollowPage = () => {
  const { nation } = useParams();

  return (
    <>
      <div className="new-feeds-page">
        <div className="is-text-center genre-artis">
          <nav className="navbar-wrap">
            <NavTabs data={CATEGORY} param={nation} />
          </nav>
        </div>
        <Outlet></Outlet>

      </div>
    </>
  );
};

export default FollowPage;
