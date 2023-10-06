import Navbar from "@/components/Navbar";
import { Posts } from "@/components/Posts/Posts";
import { useEffect, useState } from "react";
import { ReactComponent as YouTubeIcon } from "bootstrap-icons/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as TelegramIcon } from "bootstrap-icons/icons/telegram.svg";
import { ReactComponent as TwitchIcon } from "bootstrap-icons/icons/twitch.svg";
import { Link } from "react-router-dom";
import "./Home.css";
import RandomGames from "@/components/RandomGames";

const Home = () => {
  const [num2, setNum2] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    console.log("num2 changed");
  }, [num2]);

  return (
    <>
      <div className="logo-container">
        <img src="src/assets/logo.png" alt="Логотип сайта" />
        <div className="icons">
         <a href="https://www.youtube.com/" target="_blank"><YouTubeIcon /></a> 
         <a href="https://discord.com/" target="_blank"><DiscordIcon  /></a> 
         <a href="https://web.telegram.org/" target="_blank"><TelegramIcon /></a> 
         <a href="https://www.twitch.tv/" target="_blank"><TwitchIcon /></a> 
        </div>
      </div>
      <div className="container">
        <header className="header">
          <Navbar />
          <h1>Главная</h1>
          <input
          type="text" className="search-input" placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          />
        </header>
        <main className="container flex-grow-1 mt-4">
          <RandomGames />
        </main>
        <footer className="bg-dark text-white p-3">
          Здесь могла бы быть ваша реклама
        </footer>
      </div>
    </>
  );
};

export default Home;
