import React, { Component } from "react";

// Local Components
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./TripItem.css";

const TripItem = (props) => {
  return (
    <div className="col-4">
      <Card className="trip-item__content mt-5 cardCustomHeight">
        <li className="trip-item">
          <div className="trip-item__info ">
            <div className="tripheadingContainer">
              <h2 className="sub-heading">{props.title}</h2>
            </div>

            <p className="showFourRows">{props.description}</p>
          </div>
          <div className="trip-item__actions">
            <Button to={`/updateTrip/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </li>
      </Card>
    </div>
  );
};

export default TripItem;
