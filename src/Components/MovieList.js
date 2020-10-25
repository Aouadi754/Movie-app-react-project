import React from 'react'
import MovieCard from './MovieCard'



function MovieList({Movies}) {
    return (
        
            <div style={{display:"flex",flexWrap:"wrap",marginLeft:"8%",marginRight:"5%",marginTop:"60px"}}>
            {Movies.map((movie, i)=>(<MovieCard key={i} Movie={movie} />))}
            
        
            
        </div>
    )
}

export default MovieList
