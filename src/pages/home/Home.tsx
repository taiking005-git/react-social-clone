import Createpost from "../../components/createpost/Createpost";
import Feeds from "../../components/feeds/Feeds";
import Stories from "../../components/stories/Stories";

const Home = ({ user }) => {
  return (
    <>
      <Stories />
      <Createpost />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
    </>
  );
};

export default Home;
