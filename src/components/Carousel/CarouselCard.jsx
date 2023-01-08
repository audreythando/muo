import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.imageurl} alt="product service" />
      <h2>{props.name}</h2>
      
      <p>{props.description}</p>
      <p>
        <button>Read More...</button>
      </p>
    </div>
  );
}