const express = require("express");
const dotenv = require("dotenv");
const dataRoute = require('./routes/data')

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api", dataRoute);

// app.get("/home", (req, res) => {
//   res.send("hello world");
// });

// app.post("/adddata", (req, res) => {

// });

// app.get("/getdata", (req, res) => {
// })

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
