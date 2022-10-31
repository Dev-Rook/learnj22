import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styles from "./App.module.css";

import Nav from "./Components/Main/Nav";
import Landing from "./Pages/Landing";

import Details from "./Dynamic-Pages/Details"

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Landing />} />

          {/* Dynamic Routes Start */}
          <Route path={"Details/:id"} element={<Details/>} />
          {/* Dynamic Routes End */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
