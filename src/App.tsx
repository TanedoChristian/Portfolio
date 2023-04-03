import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
const App = () => {
  return (
    <Home />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
