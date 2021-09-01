import React from 'react'

export default function Movie({title, year, genre, isSeen}) {
    console.log(`Title ${title} Year ${year} Genre ${genre} Seen ${isSeen}`);
    return (
        <div class="container bg-info text-white"> 
           <p><h1>{title}</h1> Year: {year} Genre: {genre}<br/>
           <input type="checkbox" checked={isSeen} /> Seen
           </p>
        </div>
    )
}
