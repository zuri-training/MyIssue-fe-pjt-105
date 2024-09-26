import "./InAppHeader.css";
import { VscBell } from "react-icons/vsc";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useState } from "react";
import Search from "../Search/Search";
import MobileTab from "../MobileTab/MobileTab";

const InAppHeader = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="inAppHeaderWrapper">
      {showSearch ? (
        <div className="mobileSearchView">
          <button className="backButton" onClick={() => setShowSearch(false)}>
            <MdOutlineKeyboardArrowLeft
              className="backButtonIcon"
              size="2rem"
            />
          </button>
          <div className="searchInputWrapper">
            <Search />
          </div>
        </div>
      ) : (
        <div className="normalInAppWrapper">
          <div className="topHeaderWrapper">
            <Logo />
            <button
              className="searchButton"
              onClick={() => setShowSearch(true)}
            >
              <BsSearch className="searchButtonIcon" size="1rem" />
            </button>
            <div className="headerCenter">
              <Search />
            </div>
            <div className="headerRight">
              <div className="notification">
                <VscBell className="notificationIcon" size="1.7em" />
                <span>1</span>
              </div>
              <Link to="/profile">
                <div className="profileImage">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/profileImage.png"}
                    alt="user profile"
                  />
                </div>
              </Link>
            </div>
          </div>
          <MobileTab />
        </div>
      )}
    </div>
  );
};

export default InAppHeader;
