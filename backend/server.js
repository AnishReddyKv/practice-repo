121anish
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend API" });
});

app.listen(5000,"0.0.0.0" ,() => {
  console.log("Backend running");
});
