import React from "react";

const StarRating = ({ movieRating, handleRating }) => {
  const stars = (rate) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "gold", cursor: "pointer", fontSize: "40px", padding : "5px"  }}
          >
            ★
          </span>
        );
      } else {
        stars.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "grey", cursor: "pointer", fontSize: "40px", padding : "5px" }}
          >
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return <div> {stars(movieRating)} </div>;
};

StarRating.defaultProps = {
  movieRating: 0,
  handleRating: () => {},
};

export default StarRating;
