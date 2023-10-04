import React from "react";
import { useParams } from "react-router-dom";

// Local Components
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

// Styling
import "./TripForm.css";

const DUMMY_TRIPS = [
  {
    id: "trip1",
    title:
      "First Trip Nostrud exercitation do laborum  Nostrud exercitation do laborum Nostrud exercitation do laborum Nostrud exercitation do laborum ",
    description: `Nostrud exercitation do laborum magna ex occaecat aliqua culpa fugiat 
    commodo eiusmod officia occaecat exercitation.`,
    creator: "u1",
  },
  {
    id: "trip2",
    title: "Second Trip",
    description: `
    Dolore in elit ipsum sit fugiat irure.Veniam amet ipsum eiusmod commodo deserunt commodo
     aliqua anim excepteur aute sit officia.
    `,
    creator: "u1",
  },
  {
    id: "trip2a",
    title: "Second Trip",
    description: `
    Dolore in elit ipsum sit fugiat irure.Veniam amet ipsum eiusmod commodo deserunt commodo
     aliqua anim excepteur aute sit officia.
    `,
    creator: "u1",
  },
  {
    id: "trip3",
    title: "Second Trip",
    description: `
    Dolore in elit ipsum sit fugiat irure.Veniam amet ipsum eiusmod commodo deserunt commodo
     aliqua anim excepteur aute sit officia.
    `,
    creator: "u1",
  },
  {
    id: "trip4",
    title: "Second Trip",
    description: `
    Dolore in elit ipsum sit fugiat irure.Veniam amet ipsum eiusmod commodo deserunt commodo
     aliqua anim excepteur aute sit officia.
    `,
    creator: "u1",
  },
  {
    id: "trip5",
    title: "Second Trip",
    description: `
    Dolore in elit ipsum sit fugiat irure.Veniam amet ipsum eiusmod commodo deserunt commodo
     aliqua anim excepteur aute sit officia.
    `,
    creator: "u1",
  },
  {
    id: "trip3",
    title: "Third Trip",
    description: `
     Tempor ea adipisicing nisi adipisicing excepteur esse commodo aliqua enim nisi.
     `,
    creator: "u2",
  },
];

const UpdateTrip = () => {
  const tripId = useParams().tripId;

  const identifiedTrip = DUMMY_TRIPS.find((t) => t.id === tripId);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedTrip.title,
        isValid: true,
      },
      description: {
        value: identifiedTrip.description,
        isValid: true,
      },
    },
    true
  );

  const tripUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedTrip) {
    return (
      <div className="center">
        <h1>Could not find the Trip</h1>;
      </div>
    );
  }
  return (
    <form className="trip-form" onSubmit={tripUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Description cannot be less than 10 chars "
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Trip
      </Button>
    </form>
  );
};

export default UpdateTrip;
