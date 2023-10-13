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
      <div className="trip-list center mt-5 pt-5">
        <Card>
          <h2>No Trips ...</h2>
          <Button
            to="/trips/new"
            className="secondary-button"
            buttonText="Add New Trip"
          />
        </Card>
      </div>
    );
  }

  return (
    <ul className="trip-list">
      <div className="row">
        {props.items.map((trip) => (
          <TripItem
            key={trip.id}
            id={trip.id}
            title={trip.title}
            description={trip.description}
            creatorId={trip.creatorId}
          />
        ))}
      </div>
    </ul>
  );
};

export default TripList;
