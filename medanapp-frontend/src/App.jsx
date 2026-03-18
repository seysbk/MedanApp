import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import HostelDetailsPage from "./pages/hostelDetailsPage";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header appName="MedanApp" searchValue="" onSearchChange={() => {}} onSearchSubmit={() => {}} user={null} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostel/:id" element={<HostelDetailsPage />} />
        </Routes>

        <Nav />
        <Footer campusName={"UCC"}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
