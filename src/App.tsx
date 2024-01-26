import MovieForm from "./components/ForTaskOne/MovieForm/MovieForm";
import MovieCart from "./components/ForTaskOne/MovieCart/MovieCart";
import React, {useEffect, useState} from "react";
import {Joke, Movie} from "./type.s";
import "bootstrap/dist/css/bootstrap.min.css";
import ChuckNorrisCart from "./components/ForTaskTwo/ChuckNorrisCart/ChuckNorrisCart";

const url = "https://api.chucknorris.io/jokes/random";

function App() {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [switchTask, setSwitchTask] = useState(true);
  const [dataFromServer, setDataFromServer] = useState<Joke>({id: "", joke: ""});

  const addMovie = (dish: Movie) => {
    setMovie(prevState => [...prevState, dish]);
  };

  const onChangeMovieName = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const name = e.target.value;
    setMovie((prevState) => prevState.map((mov) => {
      if (mov.id === id) {
        return {
          ...mov,
          name: name,
        };
      }
      return mov;
    }));
  };

  const deleteMovie = (id: string) => {
    setMovie((prevState) => {
      return prevState.filter((mov) => {
        if (mov.id !== id) {
          return mov;
        }
      });
    });
  };

  const requestToServer = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const request = await response.json();
      setDataFromServer({
        id: request.id,
        joke: request.value,
      });
      return request;
    }
  };

  useEffect(() => {
    const setState = async () => {
      const request = await requestToServer();
      setDataFromServer({
        id: request.id,
        joke: request.value,
      });
    };

    setState();
  }, []);


  let task = (
    <div className={"col-8 h-100"}>
      <div>
        <MovieForm onSubmit={addMovie}/>
      </div>
      <div className={"border border-1 w-75 h-100 mt-4 p-3"}>
        <h3 className={"border-bottom"}>To watch list</h3>

        <div className={"h-100 overflow-auto"}>
          {movie.map((mov, index) => {
            return <MovieCart
              key={mov.id}
              movie={mov}
              index={index + 1}
              deleteMovie={() => deleteMovie(mov.id)}
              onChangeMovieName={(e) => onChangeMovieName(e, mov.id)}

            />;
          })}
        </div>
      </div>
    </div>
  );

  if (!switchTask) {
    task = <>
      <div className={"d-flex flex-column h-100"}>
        <img src={"https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"} style={{height: 300}}/>

        <ChuckNorrisCart key={dataFromServer?.id} dataFromServer={dataFromServer}/>

        <button onClick={requestToServer} type={"button"} className={"mt-auto btn btn-secondary"}>Next</button>
      </div>
    </>;
  }

  return (
    <>
      <main className={"container mt-5 d-flex flex-column align-items-center"} style={{height: 700}}>
        <div className={"align-self-baseline border-bottom w-100 mb-4 d-flex"}>
          <div
            onClick={() => setSwitchTask(true)}
            className={"border border-bottom-0 rounded-1 px-3 py-2"}
            style={{background: switchTask ? "blue" : "AliceBlue", cursor: "pointer"}}
          >
            Task 1
          </div>

          <div
            onClick={() => setSwitchTask(false)}
            className={"border border-bottom-0 rounded-1 px-3 py-2"}
            style={{background: !switchTask ? "blue" : "AliceBlue", cursor: "pointer"}}
          >
            Task 2
          </div>
        </div>
        {task}
      </main>
    </>
  );
}

export default App;
