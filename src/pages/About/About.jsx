import Navbar from "@/components/Navbar";
import { ReactComponent as YouTubeIcon } from "bootstrap-icons/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as TelegramIcon} from "bootstrap-icons/icons/telegram.svg";
import { ReactComponent as TwitchIcon } from "bootstrap-icons/icons/twitch.svg";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <YouTubeIcon />
      <DiscordIcon />
      <TelegramIcon />
      <TwitchIcon />
    </>
  );
};

export default About;