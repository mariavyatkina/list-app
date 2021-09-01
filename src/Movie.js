import React from 'react'

export default function Movie({movie, toggleSeen}) {
    console.log(`Title ${movie.title} Year ${movie.year} Genre ${movie.genre}`);
    function handleSeenClick(){
        toggleSeen(movie.title);
        console.log(movie.isSeen);
    }
    console.log(`Title ${movie.title} Year ${movie.year} Genre ${movie.genre} Seen ${movie.isSeen}`);
    return (
        <div class="container bg-info text-white"> 
           <p><h1>{movie.title}</h1> Year: {movie.year} Genre: {movie.genre}<br/>
           <input type="checkbox" checked={movie.isSeen} onChange={handleSeenClick}/> Seen
           </p>
        </div>
    )
}
