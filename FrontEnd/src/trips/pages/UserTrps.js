// 1- *** LIBRARIES ***
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//  2- **** LOCAL FILES/COMPONENTS ***
import TripList from "../components/TripList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
//  3- *** STYLING ***

const UserTrips = () => {
  const [loadedTrips, setLoadedTrips] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/trips/user/${userId}`
        );
        setLoadedTrips(responseData.trips);
      } catch (err) {}
    };
    fetchTrips();
  }, [sendRequest, userId]);

  const tripDeletedHandler = (deletedTripId) => {
    setLoadedTrips((prevTrips) =>
      prevTrips.filter((trip) => trip.id !== deletedTripId)
    );
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedTrips && (
        <TripList items={loadedTrips} onDeleteTrip={tripDeletedHandler} />
      )}
      ;
    </React.Fragment>
  );
};

export default UserTrips;
