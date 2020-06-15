import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  debugger;
  //let state = props.store.getState();
  let itemsName = props.state.navbarPage.siteBarItem.map((el) => {
    let path = "/" + el.path;
    return (
      <div className={s.item}>
        <NavLink to={path} activeClassName={s.active}>
          {el.item}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className={s.nav}>
      {itemsName}
      <Friends store={props.store} state={props.store.getState()} />
    </nav>
  );
};

export default Navbar;
// .siteBarItem
