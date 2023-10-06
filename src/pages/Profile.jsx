import Navbar from "@/components/Navbar";
import "@/scss/styles.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/auth/users/me/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUserData({});
  };


  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <h1 className="profile-heading">Профиль пользователя: {userData.username}</h1>
        <button onClick={handleLogout} className="logout-button">
          Выйти
        </button>
        <div className="user-details">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Имя пользователя:
            </label>
            <div className="form-input">{userData.username}</div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Электронная почта:
            </label>
            <div className="form-input">{userData.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Пароль:
            </label>
            <div className="form-input">******</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;