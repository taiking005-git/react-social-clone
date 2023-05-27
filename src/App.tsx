import "./App.css";
import { Header } from "./components/header/Header";
import { Maincontent } from "./components/main/Maincontent";
import { Navbar } from "./components/navbar/Navbar";
import { Rightside } from "./components/rightside/Rightside";
import users from "./assets/json/users.json";
// import post from "./assets/json/post.json";

const App: React.FC = () => {
  interface UsersData {
    userId: number;
    userName: string;
    userImg: string;
    isOnline: boolean;
  }

  const user: UsersData = users[0];

  return (
    <>
      <header>
        <Header user={user} />
      </header>
      <main>
        <div className="container">
          <div className="navbar">
            <Navbar user={user} />
          </div>
          <div className="main-content">
            <Maincontent user={user} />
          </div>
          <div className="right-side">
            <Rightside user={user} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
