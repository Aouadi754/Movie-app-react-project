import React from 'react'
import { Card } from 'react-bootstrap';
import '../App.css';
import StarRating from './StarRating';


export default function MovieCard({Movie}) {
    return (
        <div className="movie" >
<Card style={{margin:"20px",width:"270px",height:"400px"}}>
    <Card.Img style={{height:"200px"}} variant="top" src={Movie.Src} alt='' />
    <Card.Body style={{background:"#B6B8B8 "}} >
      <Card.Title className="text-center"  ><h4>{Movie.title}</h4></Card.Title>
      <Card.Text style={{fontSize:"13px",height:"50%",fontWeight:"bold",fontFamily:" Arial,Sans-Serif"}} >
  {Movie.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer  style={{backgroundColor:'#3981EA',height:'30px',display:'flex',justifyContent:'space-around',alignContent:'center',alignItems:'center'}}>
        <StarRating rate={Movie.rate}/></Card.Footer>
    
  </Card>
            
            
        </div>
    )
}