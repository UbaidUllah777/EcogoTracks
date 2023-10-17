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
      tripFrom: {
        value: "",
        isValid: false,
      },
      tripTo: {
        value: "",
        isValid: false,
      },
      commuteType: {
        value: "",
        isValid: false,
      },
      totalDistance: {
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
            tripFrom: {
              value: responseData.trip.tripFrom,
              isValid: true,
            },
            tripTo: {
              value: responseData.trip.tripTo,
              isValid: true,
            },
            commuteType: {
              value: responseData.trip.commuteType,
              isValid: true,
            },
            totalDistance: {
              value: responseData.trip.totalDistance,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchTrip();
  }, [sendRequest, tripId, setFormData]);

  const calculateCarbonEmissions = (commuteType, totalDistance) => {
    let emissionFactor = 0;

    // Assign emission factor based on commute type
    switch (commuteType) {
      case "Walking":
        emissionFactor = 0; // Walking does not emit CO2
        break;
      case "Cycling":
        emissionFactor = 0;
        break;
      case "ECOFriendlyBus":
        emissionFactor = 0.25;
        break;
      case "Car":
        emissionFactor = 2.1;
        break;
      case "Bus":
        emissionFactor = 1.1;
        break;
      case "Train":
        emissionFactor = 3;
        break;
      default:
        emissionFactor = 0;
    }

    // Calculate total carbon emissions
    const carbonEmissions = (emissionFactor * totalDistance).toFixed(2); // up to 2 decimal places

    return parseFloat(carbonEmissions); // Parse to float to remove trailing zeros
  };

  const tripUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    const carbonEmissions = calculateCarbonEmissions(
      formState.inputs.commuteType.value,
      formState.inputs.totalDistance.value
    );
    try {
      await sendRequest(
        `http://localhost:5000/api/trips/${tripId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          tripFrom: formState.inputs.tripFrom.value,
          tripTo: formState.inputs.tripTo.value,
          commuteType: formState.inputs.commuteType.value,
          totalDistance: formState.inputs.totalDistance.value,
          carbonEmissions: carbonEmissions,
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
            id="tripFrom"
            element="input"
            type="text"
            label="Trip Starts From (Location Name)"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid trip Start location"
            onInput={inputHandler}
            initialValue={loadedTrip.tripFrom}
            initialValid={true}
          />
          <Input
            id="tripTo"
            element="input"
            label="Trip Ends At (Location Name)"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid trip ending location"
            onInput={inputHandler}
            initialValue={loadedTrip.tripTo}
            initialValid={true}
          />
          <Input
            id="commuteType"
            element="select"
            label="Please Select your Commute type"
            validators={[]}
            onInput={inputHandler}
            initialValue={loadedTrip.commuteType}
            initialValid={true}
          />
          <Input
            id="totalDistance"
            type="number"
            element="input"
            label="Total Distance (KM)"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid value"
            onInput={inputHandler}
            initialValue={loadedTrip.totalDistance}
            initialValid={true}
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
