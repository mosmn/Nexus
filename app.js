const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const debug = require("debug")("app");
require("dotenv").config();

const indexRouter = require("./routes/index");
const homeRouter = require("./routes/home");

const app = express();
app.set('trust proxy', true);

const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dev_db_url = 

"mongodb+srv://ithinkisee8:gIXNEDWjppIE5utX@cluster0.wyskkpm.mongodb.net/Nexus?retryWrites=true&w=majority"

const mongoDB = process.env.MONGODB_URI || dev_db_url;

(async () => {
  try {
    await mongoose.connect(mongoDB);
    debug("Connected to MongoDB.");
  } catch (err) {
    debug(`Error connecting to MongoDB: ${err}`);
  }
})();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/home", homeRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
