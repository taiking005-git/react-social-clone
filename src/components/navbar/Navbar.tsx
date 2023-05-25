import "./Navbar.css";
import profileImg from "../../assets/images/profile-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBell,
  faBookmark,
  faChartLine,
  faPalette,
  faGear,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Notification } from "../ui/Notification";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(Number);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleMenuClick = (index: number) => {
      setActiveMenu(index);
      index === 2 ? setShowNotification(true) : setShowNotification(false);
      document.getElementById("notifications-count").style.display = "none";
    };
    const menuItem = document.querySelectorAll(".menu-item");

    menuItem.forEach((item, index) => {
      item.addEventListener("click", () => handleMenuClick(index));
    });
  });
  return (
    <div className="navWrapper">
      <div className="navbar">
        <a className="profile">
          <div className="profile-picture">
            <img src={profileImg} alt="profile image" />
          </div>
          <div className="handle">
            <h3 className="userName">Tai King</h3>
            <p className="text-muted">@taiking</p>
          </div>
        </a>
        {/* <!-- ==================== SIDE BAR ======================== --> */}
        <div className="sidebar">
          <a className={`menu-item ${activeMenu === 0 ? "active" : ""}`}>
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <h3>Home</h3>
          </a>
          <a className={`menu-item ${activeMenu === 1 ? "active" : ""}`}>
            <span>
              <FontAwesomeIcon icon={faCompass} />
            </span>
            <h3>Explore</h3>
          </a>
          <a
            className={`menu-item ${activeMenu === 2 ? "active" : ""}`}
            id="notifications"
          >
            <span>
              <FontAwesomeIcon icon={faBell} />
              <small className="notifications-count" id="notifications-count">
                9+
              </small>
            </span>
            <h3>Notifications</h3>
            {/* <!-- =================Notification Popup =============================--> */}
          </a>
          <Notification showNotification={showNotification} />
          <a
            className={`menu-item ${activeMenu === 3 ? "active" : ""}`}
            id="messages-notification"
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              <small className="messages-count">2</small>
            </span>
            <h3>Messages</h3>
          </a>
          <a className={`menu-item ${activeMenu === 4 ? "active" : ""}`}>
            <span>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
            <h3>Bookmarks</h3>
          </a>
          <a className={`menu-item ${activeMenu === 5 ? "active" : ""}`}>
            <span>
              <FontAwesomeIcon icon={faChartLine} />
            </span>
            <h3>Analytics</h3>
          </a>
          <a
            className={`menu-item ${activeMenu === 6 ? "active" : ""}`}
            id="theme-settings"
          >
            <span>
              <FontAwesomeIcon icon={faPalette} />
            </span>
            <h3>Theme</h3>
          </a>
          <a className={`menu-item ${activeMenu === 7 ? "active" : ""}`}>
            <span>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <h3>Settings</h3>
          </a>
        </div>
        <a className="sidebar btn btn-primary">Create Post</a>
      </div>
    </div>
  );
};
