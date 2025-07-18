import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  // console.log(day); // Log the current day of the week
  let type = "a weekday";
  let advice = "Stay focused and productive";

  if (day === 0 || day === 6) {
    type = "a weekend";
    advice = "Step back and relax!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
