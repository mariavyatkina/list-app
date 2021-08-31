import React from 'react'
import Movie from './Movie'

export default function MovieList(movies) {
    console.log(movies);
    const movieList = Array.from(movies);

    
    return ( 
        movieList.map(movie => {
            return (
                <div> 
                    <h1>This is a movie</h1>
            <Movie title={movie.title} year={movie.year} genre={movie.genre} />
            </div>
            )
        })
    );
}
