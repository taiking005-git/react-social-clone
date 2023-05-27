import "./Stories.css";
// import profileImg1 from "../../assets/images/profile-1.jpg";
// import profileImg8 from "../../assets/images/profile-8.jpg";
// import stories1 from "../../assets/images/story-1.jpg";

const Stories = () => {
  return (
    <ul className="stories">
      <li className="story">
        <img src={""} alt="" className="stories-img" />
        <div className="profile-info">
          <img src={""} alt="" className="profile-img" />
          <p className="name">Your story</p>
        </div>
      </li>
      <li className="story">
        <img src={""} alt="" className="stories-img" />
        <div className="profile-info">
          <img src={""} alt="" className="profile-img" />
          <p className="name">Your story</p>
        </div>
      </li>
      <li className="story">
        <img src={""} alt="" className="stories-img" />
        <div className="profile-info">
          <img src={""} alt="" className="profile-img" />
          <p className="name">John Teller</p>
        </div>
      </li>
      <li className="story">
        <img src={""} alt="" className="stories-img" />
        <div className="profile-info">
          <img src={""} alt="" className="profile-img" />
          <p className="name">Raheem Ty</p>
        </div>
      </li>
      <li className="story">
        <img src={""} alt="" className="stories-img" />
        <div className="profile-info">
          <img src={""} alt="" className="profile-img" />
          <p className="name">Janet Jeo</p>
        </div>
      </li>
    </ul>
  );
};

export default Stories;
