const express = require ("express")
const router = express.Router()

const userAuth = require ("../middleware/userAuth")

// protect routes from unauthorized user
router.use( userAuth )

const { getAll,
        getOne,
        post,
        patchOne,
        deleteOne}
 = require ("../controllers/controllers")

router.get("/", getAll)

router.get("/:id", getOne)

router.post("/", post)

router.patch("/:id", patchOne)

router.delete("/:id", deleteOne)



module.exports = router;