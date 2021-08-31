import React from 'react'

export default function Movie({title, year, genre}) {
    console.log(`Title ${title} Year ${year} Genre ${genre}`);
    return (
        <div>
            <h1>This is Movie</h1> <br/>
            <ul>
            <li>Title: {title} </li>
           <li> Year: {year} </li>
            <li>Genre: {genre} </li>
            </ul>
        </div>
    )
}
