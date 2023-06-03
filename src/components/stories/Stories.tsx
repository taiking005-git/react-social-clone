import "./Stories.css";
import Storieslist from "./../storieslist/Storieslist";
import { StoriesProps, UserProps, UsersProps } from "../../../model";

const Stories: React.FC<UsersProps & StoriesProps & UserProps> = ({
  usersData,
  storiesData,
  user,
}) => {
  return (
    <ul className="stories">
      {/* <li className="story">
        <img
          src={
            storiesData.find((story) => story.userId === user.userId)?.storyImg
          }
          alt=""
          className="stories-img"
        />
        <div className="profile-info">
          <img
            src={usersData.find((u) => u.userId === user.userId)?.userImg}
            alt=""
            className="profile-img"
          />
          <p className="name">Your story</p>
        </div>
      </li> */}
      {storiesData.map(
        (story) =>
          story.userId !== user.userId && (
            <Storieslist
              key={story._id}
              storiesData={storiesData}
              usersData={usersData}
              story={story}
            />
          )
      )}
    </ul>
  );
};

export default Stories;
