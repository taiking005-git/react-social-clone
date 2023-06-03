import {
  PostsProps,
  UserProps,
  UsersProps,
  StoriesProps,
} from "../../../model";
import Home from "../../pages/home/Home";

export const Maincontent = ({
  user,
  postDatas,
  usersData,
  storiesData,
}: UserProps & PostsProps & UsersProps & StoriesProps) => {
  return (
    <>
      <Home
        user={user}
        postDatas={postDatas}
        usersData={usersData}
        storiesData={storiesData}
      />
    </>
  );
};
