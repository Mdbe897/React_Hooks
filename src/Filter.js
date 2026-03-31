import React from "react";

function Filter({ setSearchTitle, setSearchRating }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setSearchRating(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;