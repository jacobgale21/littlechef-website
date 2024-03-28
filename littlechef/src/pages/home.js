import { NavBar } from "../components/Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="title">
        <h1 className="titletext">Little Chef</h1>
      </div>
      <div className="line"></div>

      <div className="search">
        <div className="searchtitlebox">
          <div className="searchtitle">Search Recipe: </div>
          <div className="empty"></div>
        </div>

        <div className="belowtitle">
          <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <button className="Submit">Search</button>
          </div>
        </div>
      </div>

      <div className="recenttitlebox">
        <div className="recenttitle">Recent Searched Recipes: </div>
        <div className="recentempty"></div>
      </div>
    </div>
  );
};
