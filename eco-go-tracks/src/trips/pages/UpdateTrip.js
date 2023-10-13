import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// Local Components
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

// CUSTOM HOOKS
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

// Styling
import "./TripForm.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const UpdateTrip = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedTrip, setLoadedtrip] = useState();

  const tripId = useParams().tripId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/trips/${tripId}`
        );
        setLoadedtrip(responseData.trip);
        setFormData(
          {
            title: {
              value: responseData.trip.title,
              isValid: true,
            },
            description: {
              value: responseData.trip.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchTrip();
  }, [sendRequest, tripId, setFormData]);

  const tripUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/trips/${tripId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/" + auth.userId + "/trips");
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedTrip && !error) {
    return (
      <div className="center">
        <Card
          style={{ maxWidth: "40em", marginLeft: "25%", marginRight: "25%" }}
        >
          <h1>Could not find the Trip</h1>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} OnClear={clearError} />
      {!isLoading && loadedTrip && (
        <form className="trip-form" onSubmit={tripUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={loadedTrip.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(10)]}
            errorText="Description cannot be less than 10 chars "
            onInput={inputHandler}
            initialValue={loadedTrip.description}
            initialValid={formState.inputs.title.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Update Trip
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateTrip;
