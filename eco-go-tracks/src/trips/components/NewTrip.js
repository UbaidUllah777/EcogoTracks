import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./NewTrip.css";

const NewTrip = () => {
  return (
    <React.Fragment>
      <form className="trip-form">
        <h2 className="globalHeading3">Add new Trip</h2>
        <Input
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
        />
      </form>
    </React.Fragment>
  );
};

export default NewTrip;
