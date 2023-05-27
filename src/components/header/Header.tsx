import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
interface UsersData {
  userId: number;
  userName: string;
  userImg: string;
  isOnline: boolean;
}
interface UserProps {
  user: UsersData;
}
export const Header: React.FC<UserProps> = ({ user }) => {
  console.log(user);
  return (
    <div className="header">
      <div className="wrapper container">
        <h2 className="logo">social</h2>
        <div className="search-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            placeholder="Search for creator, inspiration and projects"
          />
        </div>
        <div className="create">
          <a className="btn btn-primary">Create</a>
          <div className="profile-picture">
            <img src={user.userImg} alt="profile Image" />
          </div>
        </div>
      </div>
    </div>
  );
};
