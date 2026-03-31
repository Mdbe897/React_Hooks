import React from "react";

function AddMovie({ addMovie }) {
  const [newMovie, setNewMovie] = React.useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie