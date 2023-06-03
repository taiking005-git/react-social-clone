import "./Feeds.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BiHeart } from "react-icons/bi";
import {
  HiOutlineBookmark,
  HiOutlineChatAlt,
  HiOutlineShare,
} from "react-icons/hi";
import Like from "../like/Like";
import { PostProps, UsersProps } from "./../../../model";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const handleLike = () => {
  console.log("clicked");
};

const Feeds: React.FC<PostProps & UsersProps> = ({ post, usersData }) => {
  return (
    <div>
      {/* <!---------------------------- FEEDS  --------------------------> */}
      <div className="feeds">
        {/* <!---------------------------- FEED 1  --------------------------> */}
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-picture">
                <img
                  src={
                    usersData.find((data) => data.userId === post.userId)
                      ?.userImg
                  }
                  alt=""
                />
              </div>
              <div className="info">
                <h3 className="userName">
                  {
                    usersData.find((data) => data.userId === post.userId)
                      ?.userName
                  }
                </h3>
                <small className="text-muted">{post.date}</small>
              </div>
            </div>
            <span>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </div>
          <div className="media">
            <img src={post.photo} alt="" />
          </div>
          <div className="interactions-button">
            <div className="action-button">
              <span>
                <BiHeart className="icon" />
              </span>
              <span>
                <HiOutlineChatAlt />
              </span>
              <span>
                <HiOutlineShare />
              </span>
            </div>
            <div className="bookmark">
              <span>
                <HiOutlineBookmark />
              </span>
            </div>
          </div>
          <Like likeArray={post.likes} usersData={usersData} />
          <div className="caption">
            <p>
              <b className="userName">
                {
                  usersData.find((data) => data.userId === post.userId)
                    ?.userName
                }
              </b>{" "}
              {post.desc}
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
