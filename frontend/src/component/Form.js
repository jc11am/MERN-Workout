import { useState } from "react";
import { useWorkoutHook } from "../hooks/useWorkoutHook";
import { useAuthHook } from "../hooks/useAuthHook"

const Form = function() {
    const { user } = useAuthHook()

    const { dispatch } = useWorkoutHook()
    const [ title, setTitle ] = useState("")
    const [ loads, setLoads ] = useState("")
    const [ reps, setReps ] = useState("")
    const [ error, setError ] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


 const submitForm = async function(e) {
    e.preventDefault()

    if(!user) {
        setError("Not Authenticated")
        return
    }

    const newWorkout = { title, loads, reps }

    const response = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(newWorkout),
        headers:  {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
        }
    })

        const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
        
    }

    if(response.ok) {
        setTitle("")
        setLoads("")
        setReps("")
        setError(null)
        setEmptyFields([])
        dispatch({ type: "Create_Workouts", payload: json })
    }
}

    return(

        <form className="create" onSubmit={submitForm}>
        <h3>Add a New Workout</h3>

            <label>Title:</label>
            <input type="text"
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            value={title}
            className={ emptyFields.includes("title") ? "error" : "" }
            />
            <label>Loads (kg):</label>
            <input type="number"
            onChange={(e)=>{
                setLoads(e.target.value)
            }}
            value={loads}
            className={ emptyFields.includes("loads") ? "error" : "" }
            />

            <label>Reps:</label>
            <input type="number"
            onChange={(e)=>{
                setReps(e.target.value)
            }}
            value={reps}
            className={ emptyFields.includes("reps") ? "error" : "" }
             />

            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Form