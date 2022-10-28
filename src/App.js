import React from "react";
import { Toaster } from "react-hot-toast";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <AppNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
