import MovieList from "./MovieList";

function Home({ movies }) {
  return (
    <div>
      <h1>My Movie App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;