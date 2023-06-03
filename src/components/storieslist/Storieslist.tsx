interface UsersData {
  userId: number;
  userName: string;
  userImg: string;
  tag: string;
  friends: number[];
  isOnline: boolean;
}
interface UsersProps {
  usersData: UsersData[];
}

interface StoryData {
  _id: number;
  userId: number;
  storyImg: string;
}

interface StoryProps {
  story: StoryData;
}
interface StoriesProps {
  storiesData: StoryData[];
}
const Storieslist: React.FC<UsersProps & StoriesProps & StoryProps> = ({
  storiesData,
  usersData,
  story,
}) => {
  return (
    <li className="story">
      <img
        src={storiesData.find((s) => s.userId === story.userId)?.storyImg}
        alt=""
        className="stories-img"
      />
      <div className="profile-info">
        <img
          src={usersData.find((u) => u.userId === story.userId)?.userImg}
          alt=""
          className="profile-img"
        />
        <p className="name">
          {usersData.find((u) => u.userId === story.userId)?.userName}
        </p>
      </div>
    </li>
  );
};

export default Storieslist;
