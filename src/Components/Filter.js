import React from 'react'
import '../App.css';
import {InputGroup,FormControl} from 'react-bootstrap'
import { RatingStar } from "rating-star";

function Filter({updateRating,filterRating,updatesearchValue}) {
    return (
        <div className='search_bar'>
             
    <div style={{display:'flex',alignItems:'center'}}>
        {/* Filter by rate code start */}
        <div style={{marginLeft:'24%',marginTop:'15px'}}>
    <RatingStar
        clickable
        maxScore={5}
        id="123"
        rating={filterRating}
        onRatingChange={updateRating}  
      />
      </div>
      {/* Filter by rate code end */}
    {/* Filter by title code start  */}
    <div style={{marginTop:'30px',width:'40%',marginLeft:'30px'}}>
     <InputGroup className="mb-3">
    <FormControl
      placeholder="Search a movie.."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{borderColor:'black'}}
      onChange={updatesearchValue}
    />
  </InputGroup>
  {/* Filter by title code end */}
  </div>
  </div>
  
            
        </div>
    )
}

export default Filter