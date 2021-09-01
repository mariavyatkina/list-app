import React from 'react'

export default function Movie({title, year, genre}) {
    console.log(`Title ${title} Year ${year} Genre ${genre}`);
    return (
        <div class="container bg-primary text-white"> 
           <p><h1>{title}</h1> Year: {year} Genre: {genre}</p> 
        </div>
    )
}
