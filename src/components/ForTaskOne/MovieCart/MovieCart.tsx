import React from "react";
import {Movie} from "../../../type.s";
import "bootstrap/dist/css/bootstrap.min.css"

interface Props {
  movie: Movie;
  index: number;
  deleteMovie: () => void;
  onChangeMovieName: React.ChangeEventHandler<HTMLInputElement>;
}
const MovieCart: React.FC<Props> = React.memo( ({movie, index, deleteMovie, onChangeMovieName}) => {

  return (
    <div className={"d-flex gap-2 flex-row align-items-center border border-2 rounded-1 p-2 bg-secondary"}>
      <input
        value={movie.name}
        className={"border border-0 w-100 p-2"}

        onChange={onChangeMovieName}
      />
      <span>#{index}</span>
      <button
        type={"button"}
        className={"border border-0 bg-white px-2 my-1"}

        onClick={deleteMovie}
      >
        ✖
      </button>
    </div>
  );
},(prevProps, nextProps) => {
  return nextProps === prevProps && nextProps.movie === nextProps.movie;
});

export default MovieCart;