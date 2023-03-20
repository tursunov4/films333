import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./Assets/main.css";
import Home from "./Pages/Home/Home";
import Popular from "./Pages/Popular/Popular";
import TopRated from "./Pages/TopRated/TopRated";
import SinglePage from "./components/SinglePage/SinglePage";
import PersonSinglePage from "./components/PersonSinglePage/PersonSinglePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/top-rated" element={<TopRated/>}/>
        <Route path={'/single-page/:id'} element={<SinglePage/>} />
        <Route path={'/single-page/:id/person/:id'} element ={<PersonSinglePage/>}/>
     
      </Routes>
    </>
  );
}

export default App;
