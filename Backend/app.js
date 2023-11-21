// ******* Libraries *******
const express = require("express");
// const path = require("path");

const bodyParser = require("body-parser"); // import "bodyParser" to ensure that we parse the body of incoming request
const mongoose = require("mongoose");

// ********* Local Files ********
const tripsRoutes = require("./routes/trips-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

// creating app object by callibng express as function
const app = express();

// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/trips", tripsRoutes);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  const error = new HttpError("could not found this route...", 404);
  throw error;
});

// only be executed to those requests that has an error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occured" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ct04ddn.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    // listen to our local host
    app.listen(5000);
    console.log("CONNECTED...");
  })
  .catch((err) => {
    console.log(err);
  });
