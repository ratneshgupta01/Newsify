import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TopStories from "./components/TopStories";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [categories] = useState([
    "Business",
    "Health",
    "Movies",
    "Politics",
    "Science",
    "Sports",
    "Technology",
    "Theater",
    "World",
  ]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<TopStories apiKey={apiKey} section="home" />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          {categories.map((e) => {
            return (
              <Route
                key={e}
                exact
                path={`/categories/${e.toLowerCase()}`}
                element={
                  <TopStories apiKey={apiKey} section={e.toLowerCase()} />
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
