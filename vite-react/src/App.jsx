import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";

function MyButton() {
  return <button>Hey, I am button.</button>;
}

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`you clicked on hobby: ${hobby}`);
  };

  const aliceProfile = {
    name: "Alice",
    age: 25,
    status: true,
    hobbies: ["reading books", "playing guitar", "hiking"],
    onHobbyClick: handleHobbyClick,
  };

  const bobProfile = {
    name: "Bob",
    age: 30,
    status: false,
    hobbies: ["painting", "cycling", "cooking"],
    onHobbyClick: handleHobbyClick,
  };

  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
      <ProfileCard {...aliceProfile} />
      <ProfileCard {...bobProfile} />
    </div>
  );
}

export default App;
