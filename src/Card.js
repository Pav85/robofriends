import React from "react";

const Card = ({ id, name, email, city, zipcode }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <h4>{email}</h4>
        <p>{city}</p>
        <p className="f6">{zipcode}</p>
      </div>
    </div>
  );
};

export default Card;
