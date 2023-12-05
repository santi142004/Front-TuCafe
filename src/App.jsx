// App.jsx
import React from 'react';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";
import Homee from "../src/Components/Homee/Homee";
import Menu from "../src/Components/Menu/Menu";
import Review from "../src/Components/Review/Review";
import Book from "../src/Components/Book/Book";
import About from "../src/Components/About/About";
import Login from "./LogIn";
import SignUp from "./SingUp";

// library.add(faMugHot);

function App() {
  return (
    <>
      <Header />
    <div>

      <Routes>
      <Route path="/" element={<About /> } />
      <Route path="/lugares" element={<Menu />} />
      <Route path="/Acerca" element={<Homee />} />
      <Route path="/opiniones" element={<Review />} />
      <Route path="/reserva" element= {<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
