import "./Navbar.css";
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
import { Notification } from "../Notification/Notification";
import { useEffect, useState } from "react";
import { UserProps } from "../../../model";
import Profile from "../profile/Profile";

export const Navbar = ({ user }: UserProps) => {
  const [activeMenu, setActiveMenu] = useState(Number);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const notificationsCount = document.getElementById(
      "notifications-count"
    ) as HTMLElement;
    const messagesCount = document.getElementById(
      "messages-count"
    ) as HTMLElement;

    const handleMenuClick = (index: number) => {
      setActiveMenu(index);
      if (index === 2) {
        setShowNotification(true);
        showNotification && setShowNotification(false);
        notificationsCount ? (notificationsCount.style.display = "none") : "";
      } else {
        setShowNotification(false);
      }
      // Checked if the index of selected menu-item is the messages-count and hide the span
      index === 3 && messagesCount
        ? (messagesCount.style.display = "none")
        : "";
    };
    const menuItem = document.querySelectorAll(".menu-item");
    // Add a click event listener to the menu-item
    menuItem.forEach((item, index) => {
      item.addEventListener("click", () => handleMenuClick(index));
    });
  });
  return (
    <div className="navWrapper">
      <Profile user={user} />
      {/* <!-- ==================== SIDE BAR ======================== --> */}
      <div className="sidebar">
        <a className={`menu-item ${activeMenu === 0 ? "active" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faHouse} className="icon" />
          </span>
          <h3>Home</h3>
        </a>
        <a className={`menu-item ${activeMenu === 1 ? "active" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faCompass} className="icon" />
          </span>
          <h3>Explore</h3>
        </a>
        <a
          className={`menu-item ${activeMenu === 2 ? "active" : ""}`}
          id="notifications"
        >
          <span>
            <FontAwesomeIcon icon={faBell} className="icon" />
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
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <small className="messages-count" id="messages-count">
              2
            </small>
          </span>
          <h3>Messages</h3>
        </a>
        <a className={`menu-item ${activeMenu === 4 ? "active" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faBookmark} className="icon" />
          </span>
          <h3>Bookmarks</h3>
        </a>
        <a className={`menu-item ${activeMenu === 5 ? "active" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
          </span>
          <h3>Analytics</h3>
        </a>
        <a
          className={`menu-item ${activeMenu === 6 ? "active" : ""}`}
          id="theme-settings"
        >
          <span>
            <FontAwesomeIcon icon={faPalette} className="icon" />
          </span>
          <h3>Theme</h3>
        </a>
        <a className={`menu-item ${activeMenu === 7 ? "active" : ""}`}>
          <span>
            <FontAwesomeIcon icon={faGear} className="icon" />
          </span>
          <h3>Settings</h3>
        </a>
      </div>
      <a className="sidebar btn btn-primary">Create Post</a>
    </div>
  );
};
