import React, { useEffect, useReducer } from "react";
import "./homepage.css";
import getAll from "../../Services/foodServices";
import Thumbnails from "../../Components/Thumbnails/Thumbnails";

const initialState = {
  foods: [],
};

// Fonction de reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return {
        ...state,
        foods: action.payload,
      };

    default:
      return state;
  }
};

const HomePage = () => {
  // gère l'état du réducteur
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;

  // Récupération du type d'action
  useEffect(() => {
    getAll().then((foods) =>
      dispatch({ type: "FOODS_LOADED", payload: foods })
    );
  }, []);

  return <>
    <Thumbnails foods={foods} />
  </>;
};

export default HomePage;
