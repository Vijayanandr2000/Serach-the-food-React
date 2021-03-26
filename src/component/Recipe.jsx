import React, { useState } from "react";
import Details from "./Detail";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        CHECK IT OUT
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Details ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
