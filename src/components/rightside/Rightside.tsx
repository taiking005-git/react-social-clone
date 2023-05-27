import Messages from "../messages/Messages";
import Friendrequests from "./../friendrequests/Friendrequests";
import "./Rightside.css";

export const Rightside = ({ user }) => {
  return (
    <div className="right">
      <Messages />
      <Friendrequests />
    </div>
  );
};
