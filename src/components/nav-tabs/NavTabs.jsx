import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav-tabs.scss";

const NavTabs = ({ data, param }) => {
  return (
    <div className="nav-tabs-container" style={{overflow:"scroll hidden"}}>
      <ul className="nav-bar">
        {data.map((item, i) => (
          <li
            className={"nav-bar__item " + (param === item.nation ? "active" : "")}
            key={i}
          >
            <div className="nav-bar__link">
              <NavLink to={item.link}>
                <h6 className="nav-bar__title">{item.title}</h6>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTabs;
