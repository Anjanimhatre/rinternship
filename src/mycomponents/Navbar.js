import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faTachometerAlt,
  faChalkboardTeacher,
  faUsers,
  faRobot,
  faChartLine,
  faClipboardList,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./static/logo.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Company Logo" className="logo" />
        <span className="logo">FirstBench</span>
      </div>
      <ul className="navbar-menu">
        <li className="menu-item">
          <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
          Dashboard
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="menu-icon" />
          FirstGuru
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faUsers} className="menu-icon" />
          Townhall
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faRobot} className="menu-icon" />
          AI Evaluation
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faChartLine} className="menu-icon" />
          Performance
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faClipboardList} className="menu-icon" />
          Mock Test
        </li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
        <div className="profile">
           
          <button onClick={toggleDropdown} className="profile-button">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            Profile
          </button>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <FontAwesomeIcon icon={faUser} className="dropdown-icon" />
                My Profile
              </li>
              <li className="dropdown-item">
                <FontAwesomeIcon icon={faCog} className="dropdown-icon" />
                Settings
              </li>
              <li className="dropdown-item">
                <FontAwesomeIcon icon={faSignOutAlt} className="dropdown-icon" />
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
