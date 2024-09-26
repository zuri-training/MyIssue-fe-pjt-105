import { useState } from "react";
import "./LandingPageHeader.css";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "../Logo/Logo";

const LandingPageHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="landingPageHeader">
      <div className="headerLeft">
        <Logo />
        <button
          className="navLinksToggleBtn"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <MdClose className="navLinksToggleBtnIcon" />
          ) : (
            <MdMenu className="navLinksToggleBtnIcon" />
          )}
        </button>
      </div>
      <div className={`navItems ${navOpen ? "display" : ""}`}>
        <ul>
          <li>Contact us</li>
          <li>Learn more</li>
          <li>
            <Link to="/signin" id="loginBtn" className="headerBtn">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" id="signUpBtn" className="headerBtn">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPageHeader;
