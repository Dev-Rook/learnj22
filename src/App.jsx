import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styles from "./App.module.css";

import Nav from "./Components/Main/Nav";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
