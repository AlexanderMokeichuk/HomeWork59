import React, {useState} from "react";
import {Movie, MovieForm} from "../../../type.s";
import "bootstrap/dist/css/bootstrap.min.css";
interface Props {
  onSubmit: (movie: Movie) => void,
}

const MovieForm: React.FC<Props> = React.memo(({onSubmit}) => {
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
    if(stateFrom.name !== "") {
      onSubmit({
        id: Math.random().toString(),
        ...stateFrom,
      });

      setStateForm({name:""});
    }
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

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
  );
}, (prevProps, nextProps) => {
  return nextProps === prevProps;
});

export default MovieForm;