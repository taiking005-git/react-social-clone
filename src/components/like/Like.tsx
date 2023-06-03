import { UserData } from "../../../model";

interface likeProps {
  likeArray: number[];
}
interface UsersData {
  usersData: UserData[];
}

const Like = ({ likeArray, usersData }: likeProps & UsersData) => {
  // const Like: React.FC<UsersData & likeProps> = ({ likeArray, usersData }) => {
  return (
    <div className="likedby">
      {likeArray.map((like, index) => (
        <span key={index}>
          <img src={usersData.find((u) => u.userId === like)?.userImg} alt="" />
        </span>
      ))}
      <p>
        Liked by{" "}
        <b className="userName">
          {usersData[likeArray[likeArray.length - 1]]?.userName}{" "}
        </b>
        {likeArray.length <= 1 ? "" : `and  ${likeArray.length}  Others`}
      </p>
    </div>
  );
};

export default Like;
