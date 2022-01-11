import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <div className={props.className}>
      <NavLink className="NavLink" exact activeClassName="active" to="/collections" href="#">
        Collections
      </NavLink>
      <NavLink className="NavLink" exact activeClassName="active" to="/men" href="#">
        Men
      </NavLink>
      <NavLink className="NavLink" exact activeClassName="active" to="/women" href="#">
        Women
      </NavLink>
      <NavLink className="NavLink" exact activeClassName="active" to="/about" href="#">
        About
      </NavLink>
      <NavLink className="NavLink" exact activeClassName="active" to="/contact" href="#">
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinks;
