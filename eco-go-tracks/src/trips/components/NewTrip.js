import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./NewTrip.css";

const NewTrip = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const tripSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); //latter i will send it to the backend whoch is my firebase
  };

  return (
    <React.Fragment>
      <form className="trip-form" onSubmit={tripSubmitHandler}>
        <h2 className="globalHeading3">Add new Trip</h2>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          id="tripStartsFrom"
          element="input"
          label="Trip Starts From (Location Name)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Start Place"
          onInput={inputHandler}
        />
        <Input
          id="tripEndsAt"
          element="input"
          label="Trip Ends At (Location Name)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid End Place"
          onInput={inputHandler}
        />
        <Input
          id="totalDistance"
          type="number"
          element="input"
          label="Total Distance (KM)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid value"
          onInput={inputHandler}
        />
        <Input
          id="commuteType"
          element="select"
          label="Please Select your Commute type"
          validators={[]}
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter atleast 10 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Add Trip
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewTrip;
