  const { user } = require('../model/data');

const getUserData = async (req, res) => {
    // const { user } = require('../model/data');
    res.render('users', { users: user });
}

const addData = (req, res) => {
  const{id, name} = req.body;

  const newUser ={
    id: user.length + 1,
    name: name
  }

  user.push(newUser);
  
  res.redirect('/users');
}

module.exports = { getUserData, addData };