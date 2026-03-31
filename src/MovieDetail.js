import { useParams, useNavigate } from "react-router-dom";

function MovieDetail({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetail;