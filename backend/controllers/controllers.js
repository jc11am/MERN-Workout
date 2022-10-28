const Workout = require ("../model/schema")
const mongoose = require ("mongoose")


const getAll = async function(req, res) {
    const user_id = req.user._id

    const workouts = await Workout.find({ user_id })

    if(!workouts){
       return res.status(404).json({mess: "Not Found"})
    }

    res.status(200).json(workouts)
}

const getOne = async function(req, res) {

    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const workout = await Workout.findOne({_id: id})

    if(!workout){
        return res.status(404).json({mess: "Not Found"})
    }

    res.status(200).json(workout)
}

// Post request
const post = async function(req, res) {
    const user_id = req.user._id

    const { title, reps, loads } = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push("title") 
    }

    if(!reps){
        emptyFields.push("reps") 
    }

    if(!loads){
        emptyFields.push("loads") 
    }

    if(emptyFields.length > 0){
       return res.status(400).json({ error: "Fields are empty", emptyFields })
    }


    try {
        const workout = await Workout.create( {title, reps, loads, user_id} )
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Patch request
const patchOne = async function(req, res) {

    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, { ...req.body })

    if(!workout){
        return res.status(404).json({mess: "Unable To Update"})
    }

    res.status(404).json(workout)
}

// Delete request
const deleteOne = async function(req, res) {
    const { id } = req.params

    //check id if valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid Id"})
    }

    const workout = await Workout.findOneAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({mess: "Not Found" })
    }

    res.status(200).json(workout)
}


module.exports = {
    getAll,
    getOne,
    post,
    patchOne,
    deleteOne
}