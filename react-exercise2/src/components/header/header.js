import React from "react";
import "./header.css";
export default function() {
  return (
    <header className="header">
      <div className="logo">Bquate test</div>
      <div className="options">
        <ul className="ulOptions">
          <li>
            <a href="#">Tracks</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
