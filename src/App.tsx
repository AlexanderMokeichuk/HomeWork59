import "bootstrap/dist/css/bootstrap.min.css";
import MovieForm from "./components/ForTaskOne/MovieForm/MovieForm";
import MovieCart from "./components/ForTaskOne/MovieCart/MovieCart";
import {useState} from "react";
import {Movie} from "./type.s";


function App() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const addMovie = (dish: Movie) => {
    setMovie(prevState => [...prevState, dish]);
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

  return (
    <>
     <main className={"container mt-5 d-flex flex-column align-items-center"} style={{height: 700}}>
       <div className={"col-8 h-100"}>
         <div>
           <MovieForm onSubmit={addMovie}/>
         </div>
         <div className={"border border-1 w-75 h-100 mt-4 p-3"}>
           <h3>To watch list</h3>
           <div className={"h-100 overflow-auto"}>
             {movie.map((mov, index) => {
               return <MovieCart
                 movie={mov}
                 index={index}
                 deleteMovie={() => deleteMovie(mov.id)}

               />
             })}
           </div>
         </div>
       </div>
     </main>
    </>
  )
}

export default App
