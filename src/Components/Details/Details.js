import React from 'react'
import ReactPlayer from 'react-player'
import './Details.css'
import {Link} from 'react-router-dom'



function Details({match,films}) {
    const selected_movie = films.find(element => element.title===match.params.moviename);
    return (
        <div>
            <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}}><p className='back_home'> Back to Home</p></Link>
            <div className='movie_details'>
            <img   src={selected_movie.Src} alt='' />
            <div>
            
            <h1>{selected_movie.title}</h1>
            
            
            <p>{selected_movie.description}</p>
            </div>
            </div>
            <p className='trailer'>Watch the trailer</p>
    <ReactPlayer width='500px' height='400px' style={{marginLeft:'33%',marginBottom:'70px'}} url={selected_movie.trailer_url} controls={true} />
           
        </div>
    )
}

export default Details
