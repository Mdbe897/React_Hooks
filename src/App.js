import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import Home from "./Home";
import MovieDetail from "./MovieDetail";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5, // ✅ comma fixed
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Avatar",
      description: "Epic sci-fi adventure",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
      rating: 4, // ✅ comma fixed
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  // Add a new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtered movies
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <Router>
      <div className="App">
        <h1>My Movie App</h1>

        <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
        <MovieList movies={filteredMovies} />
        <AddMovie addMovie={addMovie} />

        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;