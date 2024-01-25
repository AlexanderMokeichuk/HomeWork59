import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Movie, MovieForm} from "../../../type.s";

interface Props {
  onSubmit: (movie: Movie) => void,
}

const MovieForm: React.FC<Props> = ({onSubmit}) => {
  const [stateFrom, setStateForm] = useState<MovieForm>(
    {name: ""}
  );

  const changeStateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...stateFrom,
    })
  };

  return (
      <form onSubmit={onFormSubmit} className={"d-flex flex-row gap-3 align-items-center"}>
        <div className={"w-100"}>
          <input
            type="text"
            name={"name"}
            id={"name"}
            className="form-control"

            value={stateFrom.name}
            onChange={changeStateForm}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
};

export default MovieForm;