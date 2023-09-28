import React, { Component } from "react";

// Local Components
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";

import "./TripItem.css";

const TripItem = (props) => {
  return (
    <Card className="trip-item__content mt-5">
      <li className="trip-item">
        <div className="trip-item__info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="trip-item__actions">
          <Button
            to="/about-us"
            className="secondary-button"
            buttonText="Delete"
          />
        </div>
      </li>
    </Card>
  );
};

export default TripItem;
