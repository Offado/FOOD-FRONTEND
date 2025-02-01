import React from "react";
import "./thumbnails.css";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import StarRating from "../StarRating/StarRating";
import { IoMdTime } from "react-icons/io";
import Price from "../Price/Price";

const Thumbnails = ({ foods }) => {
  return (
    <ul className="list">
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/Food/${food.id}`}>
            <img
              className="image"
              src={`/assets/${food.imageUrl}`}
              alt={food.name}
            />
          </Link>
          <div className="content">
            <div className="name">{food.name}</div>
            <span className={`${food.favorite ? "favorite" : "not"}`}>
              <CiHeart size={20} />
            </span>
            <div className="stars">
              <StarRating stars={food.stars} />
            </div>
            <div className="product_item_footer">
              <div className="origins">
                {food.origins.map((origin) => (
                  <span key={origin}>{origin}</span>
                ))}
              </div>
              <div className="cook_Time">
                <span>
                  <IoMdTime />
                </span>
                {food.cookTime} min
              </div>
              <div className="price">
                <Price price={food.price} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Thumbnails;
