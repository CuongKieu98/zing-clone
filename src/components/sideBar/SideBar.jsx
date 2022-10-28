import React from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/images";
import { SIDE_BAR_ITEM_1 } from "../../consts/SIDE_BAR_ITEM";
import "./side-bar.scss";

const sideItem = SIDE_BAR_ITEM_1;

const SideBar = () => {
  const { pathname } = useLocation();
  const active = sideItem.findIndex((e) => e.path === pathname);

  return (
    <aside className="side-bar">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <div className="navbar__brand__item">
            <div className="logo" style={{ background: images.logo }}></div>
          </div>
        </div>
      </nav>
      <div className="side-bar__wrapper">
        <nav className="side-bar__wrapper__menu">
          <ul>
            {sideItem.map((item, index) => (
              <li
                key={index}
                className={`${index === active ? "active" : ""}`}
                
              >
                <Link to={item.path} title={item.title}>
                  <i className={item.icon}></i>

                  <span>{item.title}</span>
                  {item.img && (
                    <figure
                      className="radio-live"
                    >
                      <img src={item.img} alt="" />
                    </figure>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="side-bar__wrapper__divide"></div>
    </aside>
  );
};

export default SideBar;
