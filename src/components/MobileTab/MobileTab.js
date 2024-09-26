import "./MobileTab.css";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  BsBell,
  BsFillBellFill,
  BsJournalBookmarkFill,
  BsJournalBookmark,
} from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineInsertComment, MdComment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const MobileTab = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <ul id="mobileTab">
      <li>
        <Link
          to="/"
          className={`mobileTabLink ${pathname === "/" ? "active" : ""}`}
        >
          <CgFeed className="mobileTabLinkIcon" size="1.7em" />
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={`mobileTabLink ${pathname === "/saved" ? "active" : ""}`}
        >
          {pathname === "/saved" ? (
            <BsJournalBookmarkFill className="mobileTabLinkIcon" size="1.3em" />
          ) : (
            <BsJournalBookmark className="mobileTabLinkIcon" size="1.3em" />
          )}
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={`mobileTabLink ${pathname === "/answer" ? "active" : ""}`}
        >
          {pathname === "/answer" ? (
            <MdComment className="mobileTabLinkIcon" size="1.4em" />
          ) : (
            <MdOutlineInsertComment
              className="mobileTabLinkIcon"
              size="1.4em"
            />
          )}
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={`mobileTabLink ${
            pathname === "/communities" ? "active" : ""
          }`}
        >
          {pathname === "/communities" ? (
            <HiUserGroup className="mobileTabLinkIcon" size="1.7em" />
          ) : (
            <HiOutlineUserGroup className="mobileTabLinkIcon" size="1.7em" />
          )}
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={`mobileTabLink ${
            pathname === "/notifications" ? "active" : ""
          }`}
        >
          {pathname === "/notifications" ? (
            <BsFillBellFill className="mobileTabLinkIcon" size="1.4em" />
          ) : (
            <BsBell className="mobileTabLinkIcon" size="1.4em" />
          )}
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className={`mobileTabLink ${pathname === "/profile" ? "active" : ""}`}
        >
          {pathname === "/profile" ? (
            <IoPersonCircleSharp className="mobileTabLinkIcon" size="2em" />
          ) : (
            <IoPersonCircleOutline className="mobileTabLinkIcon" size="2em" />
          )}
        </Link>
      </li>
    </ul>
  );
};

export default MobileTab;
