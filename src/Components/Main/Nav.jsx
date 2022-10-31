import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Nav/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div className={Styles.Logo_Container}>
          <Link to={"/"}>
            <img src="" alt="" className={Styles.Logo} />
          </Link>
        </div>

        <h3 className={Styles.Brand}>Learn J22</h3>
      </div>

      <div className={Styles.Right_Side}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Knots & Ropes
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Sails
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Hull
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Rigging
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={""} className={Styles.Navlink}>
              Maneuvering
            </Link>
          </li>
        </ul>

        <MenuIcon
          sx={{ fontSize: 30, color: "white" }}
          className={Styles.MenuIcon}
          onClick={showMenu}
        />
      </div>

      {/* Mobile Menu Start */}

      <div className={`${Styles.Mobile_Menu_Container} ${menu ? Styles.Reveal : ""}`}>
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Logo_Container}>
              <Link to={"/"}>
                <img src="" alt="" className={Styles.Logo} />
              </Link>
            </div>

            <CloseIcon
              sx={{ fontSize: 30, color: "white" }}
              className={Styles.CloseIcon}
              onClick={showMenu}
            />
          </div>

          <ul className={Styles.Mobile_Navlink_Container}>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Knots & Ropes
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Sails
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Hull
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Rigging
              </li>
            </Link>
            <Link to={""} className={Styles.Mobile_Navlink}>
              <li onClick={showMenu} className={Styles.Mobile_NavItem}>
                Maneuvering
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu  End */}
    </nav>
  );
};

export default Nav;
