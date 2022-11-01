import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./new-feed.scss";
import { Masonry } from "@mui/lab";
import CardFeed from "../feeds-card/CardFeed";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useWindowSize } from "../../hooks";
import { getNewFeeds } from "../../api/musicApi";

const NewFeeds = () => {
  const { nation, id } = useParams();
  const [newfeeds, setNewFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const numer = useRef(1);
  const pageEnd = useRef();
  let col = 3;
  let space = 2;
  const { width } = useWindowSize();
  if (width <= 1400) {
    col = 2;
  }
  if (width <= 600) {
    col = 1;
    space = 0;
  }

  useLayoutEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );
    observer?.observe(pageEnd.current);
  }, [loading]);

  const fetchData = async () => {
    try {
      const response = await getNewFeeds(id, numer.current);
      const dataSelector = response.data.items;
      const totalItems = response.data.total;
      numer.current += 1;

      if (newfeeds.length >= totalItems) return setLoading(false);
      if (newfeeds.length === 0) {
        setNewFeeds(dataSelector);
      } else {
        setNewFeeds((value) => [...value, ...dataSelector]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? null : (
        <div className="new-feeds">
          <Masonry columns={col} spacing={space}>
            {newfeeds.map((item) => (
              <CardFeed key={uuidv4()} content={item}></CardFeed>
            ))}
          </Masonry>
          <div ref={pageEnd}></div>
        </div>
      )}
    </>
  );
};

export default NewFeeds;
