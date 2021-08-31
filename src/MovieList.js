import React from 'react'
import Movie from './Movie'

export default function MovieList(movies) {
    console.log(movies.movies);
    // const movieList = Array.from(movies);
    

    
    return ( 
        <div>
            <h1>Movie Catalog</h1>
            {movies.movies.map(movie => {
                return (
                    <div> 
                <Movie title={movie.title} year={movie.year} genre={movie.genre} />
                </div>
                )
            })}
        </div>
    )
}
