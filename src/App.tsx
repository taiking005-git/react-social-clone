import "./App.css";
import { Header } from "./components/header/Header";
import { Maincontent } from "./components/main/Maincontent";
import { Navbar } from "./components/navbar/Navbar";
import { Rightside } from "./components/rightside/Rightside";
import users from "./assets/json/users.json";
import posts from "./assets/json/posts.json";
import storiesJson from "./assets/json/stories.json";
import { PostData, StoryData, UserData } from "../model";

const currentUser: UserData = users[5];
const usersData: UserData[] = users;
const postDatas: PostData[] = posts;
const stories: StoryData[] = storiesJson;

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header user={currentUser} />
      </header>
      <main>
        <div className="container">
          <div className="navbar">
            <Navbar user={currentUser} />
          </div>
          <div className="main-content">
            <Maincontent
              user={currentUser}
              postDatas={postDatas}
              usersData={usersData}
              storiesData={stories}
            />
          </div>
          <div className="right-side">
            <Rightside />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
