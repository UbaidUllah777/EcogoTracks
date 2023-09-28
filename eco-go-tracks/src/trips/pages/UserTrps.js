// 1- *** LIBRARIES ***
import React from "react";
import { useParams } from "react-router-dom";

//  2- **** LOCAL FILES/COMPONENTS ***
import TripList from "../components/TripList";
import NewTrip from "../components/NewTrip";

//  3- *** STYLING ***

const DUMMY_TRIPS = [
  {
    id: "trip1",
    title: "First Trip",
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
    id: "trip3",
    title: "Third Trip",
    description: `
     Tempor ea adipisicing nisi adipisicing excepteur esse commodo aliqua enim nisi.
     `,
    creator: "u2",
  },
];

const UserTrips = () => {
  const userId = useParams().userId;
  const loadTrips = DUMMY_TRIPS.filter((trip) => trip.creator === userId);
  return (
    <React.Fragment>
      <NewTrip />
      <TripList items={loadTrips} />;
    </React.Fragment>
  );
};

export default UserTrips;
