import "./App.css";
import { Header } from "./components/header/Header";
import { Maincontent } from "./components/main/Maincontent";
import { Navbar } from "./components/navbar/Navbar";
import { Rightside } from "./components/rightside/Rightside";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main-content">
          <Maincontent />
        </div>
        <div className="right-side">
          <Rightside />
        </div>
      </main>
    </>
  );
}

export default App;
