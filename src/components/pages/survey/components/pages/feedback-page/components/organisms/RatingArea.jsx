import React from "react";
import { Rating } from 'react-simple-star-rating'

const RatingArea = (props) => {

  const ratingChanged = (newRating) => {
    props.newRating(newRating)
  }

  return (
    <div className="columns ratingArea">
      <div className="column is-one-quarter titleFb">
        <h1 className="title">Rate the Survey</h1>
        <h2 className="subtitle">Tell what you think</h2>
      </div>
      <div className="column ratingFb">
        <Rating onClick={ratingChanged} ratingValue={0} size={70} />
      </div>
    </div>
  );
};

export default RatingArea;
