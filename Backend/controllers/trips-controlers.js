const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Trip = require("../models/trip");
const User = require("../models/user");
const mongoose = require("mongoose");

// Getting a trip (by  trip id)
const getTripById = async (req, res, next) => {
  const tripId = req.params.tid;
  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong,could not find a trip",
      500
    );
    return next(error);
  }

  if (!trip) {
    const error = new HttpError(
      "Could not find the trip for the provided id",
      404
    );
    return next(error);
  }
  res.json({ trip: trip.toObject({ getters: true }) });
};

// Getting all trips of a user (by user id)
const getTripsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithTrips;
  try {
    userWithTrips = await User.findById(userId).populate("trips");
  } catch (err) {
    const error = new HttpError(
      "Fetching Trips failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!userWithTrips || userWithTrips.trips.length === 0) {
    return next(
      new HttpError("Could not find trips for the provided user id.", 404)
    );
  }

  res.json({
    trips: userWithTrips.trips.map((trip) => trip.toObject({ getters: true })),
  });
};

// Creating a trip by a user who is logged in
const createTrip = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid Inputs Provided,Please check your data", 422);
  }
  const {
    title,
    tripFrom,
    tripTo,
    commuteType,
    totalDistance,
    creator,
    carbonEmissions,
  } = req.body;
  const createdTrip = new Trip({
    title: title,
    tripFrom: tripFrom,
    tripTo: tripTo,
    commuteType: commuteType,
    totalDistance: totalDistance,
    creator: creator,
    carbonEmissions: carbonEmissions,
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating Trip failed, please try again later",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      "could not find the user for the provided id",
      404
    );
    return next(error);
  }

  //this will insert the data into our database
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdTrip.save({ session: sess });
    user.trips.push(createdTrip);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating new Trip Failed , Please Try again",
      500
    );
    return next(error);
  }

  res.status(201).json({ trip: createdTrip });
};

// Updating a trip
const updateTrip = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid Inputs Provided,Please check your data", 422)
    );
  }
  const {
    title,
    tripFrom,
    tripTo,
    commuteType,
    totalDistance,
    carbonEmissions,
  } = req.body;
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      "Something Went wrong,Could not Update the Trip. ",
      500
    );
    return next(error);
  }

  trip.title = title;
  trip.tripFrom = tripFrom;
  trip.tripTo = tripTo;
  trip.commuteType = commuteType;
  trip.totalDistance = totalDistance;
  trip.carbonEmissions = carbonEmissions;

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      "Something Went wrong,Could not Update the Trip. ",
      500
    );
    return next(error);
  }

  res.status(200).json({
    trip: trip.toObject({ getters: true }),
  });
};

// deleting a trip
const deleteTrip = async (req, res, next) => {
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something Went wrong, Could not Delete the Trip.",
      500
    );
    return next(error);
  }

  if (!trip) {
    const error = new HttpError("Trip not found.", 404);
    return next(error);
  }

  try {
    // await trip.deleteOne();
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await trip.deleteOne({ session: sess });
    trip.creator.trips.pull(trip);
    await trip.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something Went wrong, Could not Delete the Trip.",
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Trip Deleted" });
};

exports.getTripById = getTripById;
exports.getTripsByUserId = getTripsByUserId;
exports.createTrip = createTrip;
exports.updateTrip = updateTrip;
exports.deleteTrip = deleteTrip;
