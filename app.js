const createError = require("http-errors");
const cors = require("cors");
const express = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const usersRouter = require("./routes/webhook");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "200mb" }));
app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`serving on port ${PORT}`);
});
