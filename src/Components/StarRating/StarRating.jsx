import React from "react";
import "./starRating.css";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


const StarRating = ({ stars, size }) => {
  // Style des icônes
  const styles = {
    width: size + "px",
    height: size + "px",
    marginRight: size / 6 + "px",
  };

  function Stars({ number }) {
    const halfNumber = number - 0.5;

    return stars >= number ? (
        <FaStar className="regStar" size={25} />
    ) : stars >= halfNumber ? (
        <FaRegStarHalfStroke className="half" size={25} />
    ) : (
        <FaRegStar className="star" size={25} />
    );
  }

  return (
    <div className="rating">
        {
            [1,2,3,4,5].map(number => (
                <Stars key={number} number={number} />
            ))
        }
    </div>
  );
};

export default StarRating;

StarRating.defaultProps = {
  size: 4,
};
