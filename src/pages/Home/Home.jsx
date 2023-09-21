import Navbar from "@/components/Navbar";
import { Posts } from "@/components/Posts/Posts";
import { useEffect, useState } from "react";
import { ReactComponent as YouTubeIcon } from "bootstrap-icons/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as TelegramIcon } from "bootstrap-icons/icons/telegram.svg";
import { ReactComponent as TwitchIcon } from "bootstrap-icons/icons/twitch.svg";
import "./Home.css";

const Home = () => {
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log("num2 changed");
  }, [num2]);

  return (
    <div>
      <div className="logo-container">
        <img src="src/assets/logo.png" alt="Логотип сайта" />
        <div className="icons">
          <YouTubeIcon />
          <DiscordIcon />
          <TelegramIcon />
          <TwitchIcon />
        </div>
      </div>
      <div className="container">
        <header className="header">
          <Navbar />
          <h1>Главная</h1>
          <input type="text" className="search-input" placeholder="Поиск" />
        </header>
        <main className="container flex-grow-1 mt-4">
          <Posts />
        </main>
        <footer className="bg-dark text-white p-3">
          Здесь могла бы быть ваша реклама
        </footer>
      </div>
    </div>
  );
};

export default Home;
