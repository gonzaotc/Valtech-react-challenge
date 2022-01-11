import React from "react";
import NavLinks from "../NavLinks";
import "./HamburguerMenu.scss";

import IconClose from "../../../assets/icons/icon-close.svg";

const HamburguerMenu = props => {
  return (
    <div className={`hMenu__overlay ${props.menuOpen && "show"}`}>
      <div className="hMenu">
        <button className="hMenu__close" onClick={props.handleCloseMenu}>
          <img src={IconClose} alt="icon of the button to close the navigation bar" />
        </button>
        <NavLinks className="hMenu__links" />
      </div>
    </div>
  );
};

export default HamburguerMenu;
