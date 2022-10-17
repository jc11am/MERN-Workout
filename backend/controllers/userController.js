const User = require("../model/userSchema")

//login
const loginUser = function(req, res) {
    res.status(200).json({ message: "user login" })
}

//signup
const signUser = async function(req, res) {
    const { email, password } = req.body

    try {
        const user = await User.signup( email, password )
        res.status(200).json({ email ,user})
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = {
    loginUser,
    signUser
}