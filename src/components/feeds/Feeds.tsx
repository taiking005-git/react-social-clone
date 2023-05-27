import "./Feeds.css";
// import profileImg1 from "../../assets/images/profile-1.jpg";
// import feedImg from "../../assets/images/feed-3.jpg";
// import likedbyImg from "../../assets/images/profile-11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faEllipsis,
  faHeart,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

const Feeds = () => {
  return (
    <div>
      {/* <!---------------------------- FEEDS  --------------------------> */}
      <div className="feeds">
        {/* <!---------------------------- FEED 1  --------------------------> */}
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-picture">
                <img src={"profileImg1"} alt="" />
              </div>
              <div className="info">
                <h3 className="userName">John Frank</h3>
                <small className="text-muted">New York 15 Minutes ago</small>
              </div>
            </div>
            <span>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </div>
          <div className="media">
            <img src={"feedImg"} alt="" />
          </div>
          <div className="interactions-button">
            <div className="action-button">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span>
                <FontAwesomeIcon icon={faShareNodes} />
              </span>
            </div>
            <div className="bookmark">
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </div>
          </div>
          <div className="likedby">
            <span>
              <img src={"likedbyImg"} alt="" />
            </span>
            <span>
              <img src={"likedbyImg"} alt="" />
            </span>
            <span>
              <img src={"likedbyImg"} alt="" />
            </span>
            <p>
              Liked by <b className="userName">Adenike Jones</b> and
              <b> 2,334 Others</b>
            </p>
          </div>
          <div className="caption">
            <p>
              <b className="userName">Johnson Simeon</b> Lorem ipsum, dolor sit
              amet
              <span className="harsh-tag">#freestyle</span>
            </p>
          </div>
          <div className="comment text-muted">View all 277 comments</div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
