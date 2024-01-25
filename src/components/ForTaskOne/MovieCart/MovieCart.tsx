import React from "react";
import {Movie} from "../../../type.s";

interface Props {
  movie: Movie;
  index: number;
  deleteMovie: () => void;
}
const MovieCart: React.FC<Props> = ({movie, index, deleteMovie}) => {
  return (
    <div className={"d-flex gap-2 flex-row border border-2 rounded-1 p-2 bg-secondary"} key={movie.id}>
      <input
        value={`${movie.name} #${index}`}
        className={"border border-0 w-100 p-2"}
      />
      <button
        type={"button"}
        className={"border border-0 bg-white px-2 my-1"}

        onClick={deleteMovie}
      >
        X
      </button>
    </div>
  );
};

export default MovieCart;