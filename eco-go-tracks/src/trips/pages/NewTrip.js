import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import SuccessMessageModal from "../../shared/components/UIElements/SuccessMessageModal";

// Styling
import "./NewTrip.css";

const NewTrip = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isSuccess, setIsSuccess] = useState();
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

  const history = useHistory();

  const tripSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        "http://localhost:5000/api/trips",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          creator: auth.userId,
        }),
        { "Content-Type": "application/json" }
      );
      setIsSuccess("Trip Added Successfuly...! ");

      // on success I will redirect to a different page
    } catch (err) {
      // Handle error
      console.error(err); // Log the error to the console for debugging
    }
  };

  const clearMessage = () => {
    setIsSuccess(null);
    // history.push("/" + `${auth.userId}` + "/trips");
  };
  return (
    <React.Fragment>
      <SuccessMessageModal message={isSuccess} onClear={clearMessage} />
      <ErrorModal error={error} onClear={clearError} />
      <form className="trip-form" onSubmit={tripSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
        {/* <Input
          id="tripStartsFrom"
          element="input"
          label="Trip Starts From (Location Name)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Start Place"
          onInput={inputHandler}
        /> */}
        {/* <Input
          id="tripEndsAt"
          element="input"
          label="Trip Ends At (Location Name)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid End Place"
          onInput={inputHandler}
        /> */}
        {/* <Input
          id="totalDistance"
          type="number"
          element="input"
          label="Total Distance (KM)"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid value"
          onInput={inputHandler}
        /> */}
        {/* <Input
          id="commuteType"
          element="select"
          label="Please Select your Commute type"
          validators={[]}
          onInput={inputHandler}
        /> */}
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
