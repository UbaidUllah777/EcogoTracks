const express = require("express");
const { check } = require("express-validator");

// const HttpError = require("../models/http-error");
const tripsControllers = require("../controllers/trips-controlers");

const router = express.Router();

// Route for : Getting Trip by Trip Id
router.get("/:tid", tripsControllers.getTripById);

// Route for :  Getting all trips of a user by USer Id
router.get("/user/:uid", tripsControllers.getTripsByUserId);

// Route for :  Creating a trip by a speific user who is logged in
router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("tripFrom").not().isEmpty(),
    check("tripTo").not().isEmpty(),
    check("commuteType").not().isEmpty(),
    check("totalDistance").not().isEmpty(),
  ],
  tripsControllers.createTrip
);

// Route for :  updating a trip by a user and by the trip id
router.patch(
  "/:tid",
  [
    [
      check("title").not().isEmpty(),
      check("tripFrom").not().isEmpty(),
      check("tripTo").not().isEmpty(),
      check("commuteType").not().isEmpty(),
      check("totalDistance").not().isEmpty(),
    ],
  ],
  tripsControllers.updateTrip
);

// Route for :  deleting a trip by trip id
router.delete("/:tid", tripsControllers.deleteTrip);

module.exports = router;
