import React from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
