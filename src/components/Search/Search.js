import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search() {
  return (
    <div className="searchBox">
      <BsSearch className="searchIcon" size="0.9em" />
      <input type="text" placeholder="Search posts, answers, communities..." />
    </div>
  );
}

export default Search;
