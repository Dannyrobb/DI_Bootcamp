import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Mountains } from "./components/Mountains";
import { Home } from "./components/Home";
import { Bananas } from "./components/Bananas";
import { Coffee } from "./components/Coffee";
import { Nature } from "./components/Nature";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", textAlign: "center" }}>
        <h1 id="snapshot">Snapshot</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/mountains">Mountains</Link>
          </li>
          <li>
            <Link to="/coffee">Coffee</Link>
          </li>
          <li>
            <Link to="/nature">Nature</Link>
          </li>
          <li>
            <Link to="/bananas">Bananas</Link>
          </li>
        </ul>
      </nav>
      ;
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mountains" element={<Mountains />}></Route>
        <Route path="/coffee" element={<Coffee />}></Route>
        <Route path="/nature" element={<Nature />}></Route>
        <Route path="/bananas" element={<Bananas />}></Route>
      </Routes>
    </>
  );
}

export default App;
