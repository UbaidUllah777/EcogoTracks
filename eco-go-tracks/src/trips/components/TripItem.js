import React, { useState, useContext } from "react";

// Local Components
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import "./TripItem.css";

const TripItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/trips/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="trip-item__modall-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this trip? Please note that it can't
          be undone thereafter.
        </p>
      </Modal>
      <div className="col-md-6 col-lg-4 ">
        <Card className="trip-item__content mt-5 cardCustomHeight">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="tripheadingContainer center">
            <h2 className="tripTitle">{props.title}</h2>
          </div>
          <li className="trip-item">
            <div className="trip-item__info ">
              <div className="row">
                <div className="col-md-6 col-12">
                  <p
                    style={{ paddingBottom: "2px" }}
                    className="sub-heading boldText"
                  >
                    From :{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p style={{ paddingBottom: "2px", fontSize: "1rem" }}>
                    {props.tripFrom}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <p
                    style={{ paddingBottom: "2px" }}
                    className="sub-heading boldText"
                  >
                    To :{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p style={{ paddingBottom: "2px", fontSize: "1rem" }}>
                    {props.tripTo}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <p
                    style={{ paddingBottom: "2px" }}
                    className="sub-heading boldText"
                  >
                    Distance :{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p style={{ paddingBottom: "2px", fontSize: "1rem" }}>
                    {props.totalDistance}{" "}
                    <span className="sub-heading">Kms</span>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <p
                    style={{ paddingBottom: "2px" }}
                    className="sub-heading boldText"
                  >
                    Commute Type :{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p style={{ paddingBottom: "2px", fontSize: "1rem" }}>
                    {props.commuteType}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <p
                    style={{ paddingBottom: "2px" }}
                    className="sub-heading boldText"
                  >
                    Carbon Emitted :{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p style={{ paddingBottom: "2px", fontSize: "1rem" }}>
                    {props.carbonEmissions}{" "}
                    <span className="sub-heading">kg CO2</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="trip-item__actions">
              {auth.isLoggedIn && (
                <Button to={`/updateTrip/${props.id}`}>EDIT</Button>
              )}
              {auth.isLoggedIn && (
                <Button danger onClick={showDeleteWarningHandler}>
                  DELETE
                </Button>
              )}
            </div>
          </li>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TripItem;
