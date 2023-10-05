import React, { useState } from "react";

// Local Components
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

import "./TripItem.css";

const TripItem = (props) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  return (
    <React.Fragment>
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
          <li className="trip-item">
            <div className="trip-item__info ">
              <div className="tripheadingContainer">
                <h2 className="sub-heading">{props.title}</h2>
              </div>

              <p className="showFourRows">{props.description}</p>
            </div>
            <div className="trip-item__actions">
              <Button to={`/updateTrip/${props.id}`}>EDIT</Button>
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            </div>
          </li>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TripItem;
