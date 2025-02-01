import React from "react";
import { Link } from "react-router";

const Thumbnails = ({ foods }) => {
  return (
    <ul className="list">
        {
            foods.map((food) => (
                <li key={food.id}>
                    <Link to={`/Food/${food.id}`}>
                        <img className="image" src={`/assets/${food.imageUrl}`} alt={food.name} />
                    </Link>
                    <div className="content">
                        <div className="name">{food.name}</div>
                        <span>
                            
                        </span>
                    </div>
                </li>
            ))
        }
    </ul>
  );
};

export default Thumbnails;
