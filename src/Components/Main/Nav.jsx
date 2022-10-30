import React, {useState} from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Nav/Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu((prev) => !prev)
    }

  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div className={Styles.Logo_Container}>
          <img src="" alt="" className={Styles.Logo} />
        </div>

        <h3 className={Styles.Brand}>Brand</h3>
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
          onclick={showMenu}
        />
      </div>
    </nav>
  );
};

export default Nav;
