const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
