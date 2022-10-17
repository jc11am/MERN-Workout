const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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

userSchema.statics.signup = async function( email, password ) {
    const exist = await this.findOne( {email} )

    if( exist ) {
        throw Error ("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash( password, salt )

    const user = await this.create({ email, password: hash })

    return user
}

const User = mongoose.model("User", userSchema)

module.exports = User