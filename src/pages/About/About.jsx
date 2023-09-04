import { Container } from "react-bootstrap";
import { ReactComponent as YouTubeIcon } from "bootstrap-icons/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "bootstrap-icons/icons/discord.svg";
import { ReactComponent as TelegramIcon } from "bootstrap-icons/icons/telegram.svg";
import { ReactComponent as TwitchIcon } from "bootstrap-icons/icons/twitch.svg";
import React from "react";
import "./About.css";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <Container className="text-white">
        <h1>About</h1>
        <p>
          <YouTubeIcon />
          <DiscordIcon />
          <TelegramIcon />
          <TwitchIcon />
        </p>
      </Container>
    </div>
  );
};

export default About;
