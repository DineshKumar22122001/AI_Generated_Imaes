import React from "react";
import { logo } from "./assets";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreatePosts } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img className="w-28 object-contain" src={logo} alt="logo"></img>
        </Link>
        <Link
          to="/create-posts"
          className="font-inter font-medium bg-[#6469ff] rounded-md px-5 py-2 text-white  "
        >
          Create
        </Link>
      </header>
      <main className="w-full bg-[#f9fafe] sm:px-8 px-4 py-8 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-posts" element={<CreatePosts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
