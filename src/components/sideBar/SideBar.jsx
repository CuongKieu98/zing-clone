import React from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/images";
import { SIDE_BAR_ITEM_1 } from "../../consts/SIDE_BAR_ITEM";
import "./side-bar.scss";

const sideItem = [...SIDE_BAR_ITEM_1];

const SideBar = () => {
  const { pathname } = useLocation();
  
  const sideIdx = sideItem.find((e) => e.path === pathname);

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
            {sideItem.filter((e) => e.local===1).map((item, index) => (
              <li
                key={index}
                className={`${item.id === sideIdx.id ? "active" : ""}`}
                
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
      <div className="side-bar__wrapper">
        <nav className="side-bar__wrapper__menu">
          <ul>
            {sideItem.filter((e) => e.local === 2).map((item, index) => (
              <li
                key={index}
                className={`${item.id === sideIdx?.id ? "active" : ""}`}
                
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
    </aside>
  );
};

export default SideBar;
