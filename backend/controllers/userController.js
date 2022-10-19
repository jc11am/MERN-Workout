const User = require("../model/userSchema")
const jwt = require("jsonwebtoken")

//create Token
const creatToken = function( _id ){
    return jwt.sign({ _id }, process.env.Secret, { expiresIn: "3d" })
}

//login
const loginUser = async function(req, res) {
    const { email, password } = req.body

    try {
        const user = await User.login( email, password )

        //create token
        const token = creatToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//signup
const signUser = async function(req, res) {
    const { email, password } = req.body

    try {
        const user = await User.signup( email, password )

        // create token
        const token = creatToken( user._id )

        res.status(200).json({ email ,token})
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = {
    loginUser,
    signUser
}