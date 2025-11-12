const express = require("express");
const dotenv = require("dotenv");
const dataRoute = require('./routes/data')
const productRoute = require("./routes/product")
const connectDB = require("./config/db")
const cors = require("cors")
const helmet = require("helmet");
const auth = require("./routes/auth");
const ejs = require("ejs");
const path = require("path");
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.set("view engine", "ejs");
app.use(express.static("public"))
// app.set("views", path.join(__dirname, "views"))
app.set('views', path.join(__dirname, 'views'));


connectDB();

app.use("/api", dataRoute);
app.use("/product", productRoute);
app.use("/auth", auth)

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
