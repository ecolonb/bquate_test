import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Tracks from "./components/tracks/tracks";
import Albums from "./components/albums/albums";
import Artists from "./components/artists/artists";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function() {
  return (
    <div className="App">
      <Header />
      <Tracks />
      <Albums />
      <Artists />
    </div>
  );
}
