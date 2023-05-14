import "./Header.css";
import profileImg from "../../assets/images/profile-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper container">
        <h2 className="logo">socialMedia</h2>
        <div className="search-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            placeholder="Search for creator, inspiration and projects"
          />
        </div>
        <div className="create">
          <a className="btn btn-primary">Create</a>
          <div className="profile-picture">
            <img src={profileImg} alt="profile Image" />
          </div>
        </div>
      </div>
    </div>
  );
};
