
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend API" });
});

app.listen(8080, () => {
  console.log("Backend running");
});
