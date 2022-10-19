const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})


// signup
userSchema.statics.signup = async function( email, password ) {

    //validation
    if(!email || !password){
        throw Error ("All fields are required")
    }

    if(!validator.isEmail(email)){
        throw Error ("Email is not valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error ("Password not strong enough")
    }

    const exist = await this.findOne( {email} )

    if( exist ) {
        throw Error ("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash( password, salt )

    const user = await this.create({ email, password: hash })

    return user
}

// login
userSchema.statics.login = async function( email, password ) {
    // check fields
    if(!email || !password) {
        throw Error ("All fields are required")
    }

    const user = await this.findOne( {email} )

    if(!user) {
        throw Error ("Incorrect Email")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error ("Password Incorrect")
    }

    return user
    }


const User = mongoose.model("User", userSchema)

module.exports = User