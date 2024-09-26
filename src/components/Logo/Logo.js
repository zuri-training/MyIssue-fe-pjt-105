import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/assets/Logo.png"} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
