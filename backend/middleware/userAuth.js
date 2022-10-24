const jwt = require ("jsonwebtoken") 
const User = require ("../model/userSchema")

const userAuth = async function(req, res, next) {
    const { authorization } = req.headers

    if(!authorization) {
      return  res.status(401).json({ error: "Not Authenticated" })
    }

    const token =  authorization.split(" ")[1]

    try {
        const { _id } = jwt.verify(token, process.env.Secret)
        req.user = await User.findOne({ _id }).select( "_id" )
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: "Not Authenticated"})
    }
    }

module.exports = userAuth