const { users } = require("../model/data");

const getUserData = (req, res) => {
    res.render("users", { users });
};
const home = (req, res) => {
  res.render("index");
};

const imageform = (req, res) => {
  res.render("form");
};
const addData = (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    image: req.imageUrl, 
  };

  users.push(newUser);

  return res.redirect("/users");
};

const deleteData = (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.redirect("/users");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUserData, addData, home, deleteData, imageform };
