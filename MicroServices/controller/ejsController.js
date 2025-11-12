
const User = (req, res) => {
    const users = [{name: "John", age: 30}, {name: "Jane", age: 25}, {name: "Bob", age: 35}];
    res.render("index", {users: users});
}

module.exports = User;