import {
  PostsProps,
  StoriesProps,
  UserProps,
  UsersProps,
} from "../../../model";
import Createpost from "../../components/createpost/Createpost";
import Feeds from "../../components/feeds/Feeds";
import Stories from "../../components/stories/Stories";

const Home: React.FC<UserProps & UsersProps & PostsProps & StoriesProps> = ({
  user,
  postDatas,
  usersData,
  storiesData,
}) => {
  return (
    <>
      <Stories usersData={usersData} storiesData={storiesData} user={user} />
      <Createpost user={user} />
      {postDatas.map((post) =>
        user.friends.map(
          (friend) =>
            friend === post.userId && (
              <Feeds post={post} usersData={usersData} key={post._id} />
            )
        )
      )}
    </>
  );
};

export default Home;
