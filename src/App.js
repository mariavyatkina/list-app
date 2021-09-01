
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
      return [...prevMovies, {title: movieTitle, year: movieYear, genre: movieGenre, isSeen: false}]
  })
  

}
 
  return (
    <div className="App">
      <div class="input-group">
      <input type="text" name="title" class="form-control" placeholder="Movie Title" ref ={movieTitleRef}/>
      <input type="number" name="year" class="form-control" placeholder="Year" ref ={movieYearRef}/>
    <input type="text" name="genre" class="form-control" placeholder="Genre" ref={movieGenreRef}/>
    <button type="button" class="btn btn-primary" onClick={handleAddMovie}>Add Movie</button>
    </div>
      <MovieList movies={movies}/>
      <h3>0 movies in the catalog have been seen</h3>
    </div>
  );
};

export default App;
