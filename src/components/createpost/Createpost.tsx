import "./Createpost.css";
// import profileImg from "../../assets/images/profile-1.jpg";

const Createpost = () => {
  return (
    <div>
      <form className="create-post">
        <div className="profile-picture">
          <img src={"profileImg"} alt="" />
        </div>
        <input
          type="text"
          placeholder="What's on your mind, Diana"
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Createpost;
