import "./Notification.css";
// import profileImg1 from "../../assets/images/profile-4.jpg";
// import profileImg2 from "../../assets/images/profile-5.jpg";
import { useEffect } from "react";

export const Notification = ({ showNotification }) => {
  const notificationPopup = document.getElementById("notification-popup");
  useEffect(() => {
    if (showNotification && notificationPopup) {
      notificationPopup.style.display = "flex";
    } else {
      notificationPopup ? (notificationPopup.style.display = "none") : "";
    }
  });

  return (
    <div className="notification-popup" id="notification-popup">
      <ul className="notification-list">
        <li className="notification-item">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={""} alt="" />
          </div>
          <div className="notification-body">
            <b className="userName">Benjamin, Meddy</b> accepted your friend
            request
            <small className="text-muted">2 Days ago</small>
          </div>
        </li>
        <li className="notification-item">
          <div className="profile-picture">
            <img src={""} alt="" />
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
