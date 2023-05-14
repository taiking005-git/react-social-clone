import "./Stories.css";
import profileImg1 from "../../assets/images/profile-1.jpg";
import profileImg8 from "../../assets/images/profile-8.jpg";
import stories1 from "../../assets/images/story-1.jpg";

const Stories = () => {
  return (
    <ul className="stories">
      <li className="story">
        <img src={stories1} alt="" className="stories-img" />
        <div className="profile-picture">
          <img src={profileImg1} alt="" />
        </div>
        <p className="name">Your story</p>
      </li>
      <li className="story">
        <img src={stories1} alt="" className="stories-img" />
        <div className="profile-picture">
          <img src={profileImg8} alt="" />
        </div>
        <p className="name">Jolie Jacob</p>
      </li>
    </ul>
  );
};

export default Stories;
