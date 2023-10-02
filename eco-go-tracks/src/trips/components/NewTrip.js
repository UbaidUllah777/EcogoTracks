import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./NewTrip.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const NewTrip = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
          label="Trip Starts From"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Start Place"
          onInput={inputHandler}
        />
        <Input
          id="tripEndsAt"
          element="input"
          label="Trip Ends At"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid End Place"
          onInput={inputHandler}
        />
        <Input
          id="totalDistance"
          element="input"
          label="Total Distance (KM)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid value"
          onInput={inputHandler}
        />
        <Input
          id="type"
          element="input"
          label="Type"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Select a type"
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
