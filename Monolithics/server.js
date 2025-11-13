const express = require("express");
// const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");
const userRoutes = require("./routes/user");
// dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
