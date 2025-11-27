  const { user } = require('../model/data');

const getUserData = async (req, res) => {
    // const { user } = require('../model/data');
    res.render('users', { users: user });
}
const home = (req,res)=>{
  res.render("index")
}

const imageform = (req, res)=> {
  res.render("form")
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

const deleteData = (req, res) => {
  try {
    const {id} = req.params;
    const userIndex = user.findIndex(u => u.id === parseInt(id));
    if(userIndex !== -1){
      user.splice(userIndex, 1);
      res.redirect('/users');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUserData, addData, home, deleteData, imageform };