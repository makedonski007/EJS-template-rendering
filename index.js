const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (_req, res) => {
  const today = new Date();
  const day = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const type =
    day === 0 || day === 6
      ? "It's weekend, time to build Taco Town"
      : "It's weekday, time to learn EJS";
  res.render("index.ejs", { type });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
