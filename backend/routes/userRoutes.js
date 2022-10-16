const express = require ("express")
const router = express.Router()
const { loginUser, signUser } = require ("../controllers/userController")

//login
router.post("/login", loginUser )

//signup
router.post("/signup", signUser )

module.exports = router