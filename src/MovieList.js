import React from 'react'
import Movie from './Movie'

export default function MovieList({movies, toggleSeen}) {
    console.log(movies.movies);
    // const movieList = Array.from(movies);
    

    
    return ( 
        <div>
            <h1>Movie Catalog</h1>
            {movies.map(movie => {
                return (
                    <div> 
                <Movie movie={movie} toggleSeen={toggleSeen} />
                </div>
                )
            })}
        </div>
    )
}
