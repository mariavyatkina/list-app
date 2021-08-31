
import './App.css';
import Movie from './Movie.js';
import MovieList from './MovieList';
import React, {useState, useRef} from 'react'


let movieInfoArray = [
  {title:"Movie 1", year: 2000, genre:"comedy"},
  {title: "Movie 2", year: 2002, genre: "horror"}
];

function App() {

  const [movies, setMovie] = useState([]);

  const movieTitleRef = useRef([]);
  const movieYearRef = useRef([]);
  const movieGenreRef = useRef([]);

  const handleAddMovie = (e) => {
    const movieTitle = movieTitleRef.current.value;
    const movieYear = movieYearRef.current.value;
    const movieGenre = movieGenreRef.current.value;
    if (movieTitle === '') return
    setMovie(prevMovies => {
      return [...prevMovies, {title: movieTitle, year: movieYear, genre: movieGenre}]
  })
  

}
 
  return (
    <div className="App">
      <input type="text" name="title" placeholder="Movie Title" ref ={movieTitleRef}/>
      <input type="number" name="year" placeholder="Year" ref ={movieYearRef}/>
    <input type="text" name="genre" placeholder="Genre" ref={movieGenreRef}/>
    <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={movies}/>
    </div>
  );
};

export default App;
