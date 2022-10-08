const express = require("express");
const responseTime = require("response-time");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(responseTime());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
  );
  return next();
});

app.use("/", (req, res) => {
  res.status(200).json({ ok: "ok" });
});

app.listen(PORT, () => {
  console.log("App running port: ", PORT);
});
