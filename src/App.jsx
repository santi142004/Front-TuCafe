// App.jsx
import React from 'react';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";
import Login from "./LogIn";
import SignUp from "./SingUp";

// library.add(faMugHot);

function App() {
  return (
    <>
      <Header />
    <div>

      <Routes>
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
