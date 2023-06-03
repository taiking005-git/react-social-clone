import { UserProps } from "../../../model";
import "./Createpost.css";

const Createpost = ({ user }: UserProps) => {
  return (
    <div>
      <form className="create-post">
        <div className="profile-picture">
          <img src={user.userImg} alt={user.userName} />
        </div>
        <input
          type="text"
          placeholder={"What's on your mind, " + user.userName}
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Createpost;
