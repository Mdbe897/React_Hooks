import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.title}`);
  };

  return (
    <div
      style={{ border: "1px solid gray", padding: "10px", width: "200px", cursor: "pointer" }}
      onClick={handleClick}
    >
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;