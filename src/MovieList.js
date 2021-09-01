import React from 'react'
import Movie from './Movie'

export default function MovieList({movies, setMovie}) {

    // const movieList = Array.from(movies);

    const DeleteHandler = (title) => {
        setMovie(movies.filter(item => 
            item.title !== title
        ));
    }
    
    return ( 
        <div>
            <>{console.log("Here is the movies")}</>
            <h1>Movie Catalog</h1>
            {movies.map((movie, index) => {
                return (
                    <div>
                <Movie title={movie.title} year={movie.year} genre={movie.genre} />
                <button onClick={() => DeleteHandler(movie.title)}>Delete Movie</button>
                </div>
                )
            })}
        </div>
    )
}
