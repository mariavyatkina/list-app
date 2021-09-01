import React from 'react'
import Movie from './Movie'

export default function MovieList({movies, setMovie, toggleSeen}) {

    // const movieList = Array.from(movies);

    const DeleteHandler = () => {
        setMovie(movies.filter(item => 
            item.isSeen === false
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
                </div>
                )
            })}
            {movies.length === 0 ? null : <button onClick={() => DeleteHandler()}>Delete Movie</button>}
        </div>
    )
}
