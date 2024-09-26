import "./Header.css";
import InAppHeader from "../InAppHeader/InAppHeader";
import LandingPageHeader from "../LandingPageHeader/LandingPageHeader";

const Header = ({ isAuth }) => {
  return (
    <div className={`header ${isAuth ? "borderBottom" : "header-padding"}`}>
      <div className="headerContentWrapper">
        {isAuth ? <InAppHeader /> : <LandingPageHeader />}
      </div>
    </div>
  );
};

export default Header;
