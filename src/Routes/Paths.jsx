import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "../Components/Common/Top Bar/TopBar";
import NavBar from "../Components/Common/NavBar/NavBar";
import Hero from "../Components/Common/Hero/Hero";
import About from "../Components/Common/About/About";
import Facts from "../Components/Common/Facts/Facts";
import Products from "../Components/Common/Products/Products";

export default function Paths() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopBar />
                <NavBar />
                <Hero />
                <About />
                <Facts />
                {/* <Products /> */}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
