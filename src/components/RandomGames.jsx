import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./RandomGames.css"

const RandomGames = () => {
  const [randomGames, setRandomGames] = useState([]);

  const fetchRandomGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/games/');
      const games = response.data.results; 
      const shuffledGames = games.sort(() => 0.5 - Math.random());
      const selectedGames = shuffledGames.slice(0, 2);
      setRandomGames(selectedGames);
    } catch (error) {
      console.error('Error fetching random games: ', error);
    }
  };
  useEffect(() => {
    fetchRandomGames();
  }, []);

  return (
    <div className="random-games-container">
      <h2>Новости, обзоры и статьи о видеоиграх</h2>
      {randomGames.map((game) => (
        <div key={game.id} className="random-game">
          <Link to={`/post?focus=${game.title.replace(/\s/g, '')}`}>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
          </Link>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomGames;