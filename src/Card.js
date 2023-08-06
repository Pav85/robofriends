import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src="https://robohash.org/test?size=200x200"
        alt="image of a robot"
      />
      <div>
        <h2>John Doe</h2>
        <p>email address</p>
      </div>
    </div>
  );
};

export default Card;
