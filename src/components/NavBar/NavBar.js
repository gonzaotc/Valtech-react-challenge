import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import "./NavBar.scss";
import HamburguerMenu from "./HamburguerMenu/HamburguerMenu";

import IconMenu from "../../assets/icons/icon-menu.svg";
import Logo from "../../assets/icons/logo.svg";
import IconCart from "../../assets/icons/icon-cart.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <HamburguerMenu menuOpen={menuOpen} handleCloseMenu={handleCloseMenu} />
      <header className="header">
        <nav className="nav">
          <button className="menuBtn" onClick={handleOpenMenu}>
            <img src={IconMenu} alt="icon of the navigation menu" />
          </button>
          <Link className="Link" to="/collections">
            <img src={Logo} alt="logo of the brand" />
          </Link>
          <NavLinks className="NavLinks" />
        </nav>

        <div className="cartProfile">
          <span className="cartProfile__cart">
            <span className="cartProfile__cart__button">
              <img src={IconCart} alt="icon of the button to open the cart" />
            </span>
            <span className="cartProfile__cart__number">3</span>
          </span>

          <span className="cartProfile__profile">
            <img src={require("../../assets/images/image-avatar.png")} alt="avatar" />
          </span>
        </div>
      </header>
    </>
  );
};

export default NavBar;
