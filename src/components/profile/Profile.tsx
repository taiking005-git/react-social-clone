import { UserProps } from "../../../model";
import "./Profile.css";

const Profile = ({ user }: UserProps) => {
  return (
    <a className="profile">
      <div className="profile-picture">
        <img src={user.userImg} alt="profile image" />
      </div>
      <div className="handle">
        <h3 className="userName">{user.userName}</h3>
        <p className="text-muted">{user.tag}</p>
      </div>
    </a>
  );
};

export default Profile;
