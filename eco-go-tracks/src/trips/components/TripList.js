import React from "react";

// Local Components
import TripItem from "./TripItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";

// Styling
import "./TripList.css";

const TripList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="trip-list center">
        <Card>
          <h2>No Trips ...</h2>
          <Button
            to="/about-us"
            className="secondary-button"
            buttonText="Add New Trip"
          />
        </Card>
      </div>
    );
  }

  return (
    <ul className="trip-list">
      {props.items.map((trip) => (
        <TripItem
          key={trip.id}
          id={trip.id}
          title={trip.title}
          description={trip.description}
          creatorId={trip.creatorId}
        />
      ))}
    </ul>
  );
};

export default TripList;
