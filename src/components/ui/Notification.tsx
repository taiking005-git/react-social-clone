import "./Notification.css";
import profileImg1 from "../../assets/images/profile-4.jpg";
import profileImg2 from "../../assets/images/profile-5.jpg";
import { useEffect } from "react";

export const Notification = ({ showNotification }) => {
  useEffect(() => {
    if (showNotification) {
      document.getElementById("notification-popup").style.display = "flex";
    } else {
      document.getElementById("notification-popup").style.display = "none";
    }
  }, [showNotification]);
  return (
    <div className="notification-popup" id="notification-popup">
      <ul className="notification-list">
        <li className="notification-item">
          <div className="profile-picture">
            <img src={profileImg1} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={profileImg2} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={profileImg1} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={profileImg1} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
      </ul>
    </div>
  );
};
