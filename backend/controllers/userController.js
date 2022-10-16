const User = require("../model/userSchema")

//login
const loginUser = function(req, res) {
    res.status(200).json({ message: "user login" })
}

//signup
const signUser = function(req, res) {
    res.status(200).json({ message: "user signup" })
}

module.exports = {
    loginUser,
    signUser
}