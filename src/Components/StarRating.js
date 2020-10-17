import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

function StarRating({rate}) {
    return (
        <div >
            <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span >★</span>}
          starCount={5}
          value={rate}
          isHalf={true}
        />
            
        </div>
    )
}

export default StarRating