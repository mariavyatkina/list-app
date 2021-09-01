import React from 'react'
import Movie from './Movie'

export default function MovieList({movies, setMovie, toggleSeen}) {

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
                <Movie movie={movie} toggleSeen={toggleSeen}/>
                <button onClick={() => DeleteHandler(movie.title)}>Delete Movie</button>
                </div>
                )
            })}
        </div>
    )
}
