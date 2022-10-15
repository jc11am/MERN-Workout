import { useState } from "react";
import { useWorkoutHook } from "../hooks/useWorkoutHook";

const Form = function() {

    const { dispatch } = useWorkoutHook()
    const [ title, setTitle ] = useState("")
    const [ loads, setLoads ] = useState("")
    const [ reps, setReps ] = useState("")
    const [ error, setError ] = useState(null)


 const submitForm = async function(e) {
    e.preventDefault()

    const newWorkout = { title, loads, reps }

    const response = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(newWorkout),
        headers:  {
            "Content-Type": "application/json"
        }
    })

        const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        
    }

    if(response.ok) {
        setTitle("")
        setLoads("")
        setReps("")
        setError(null)
        dispatch({ type: "Create_Workouts", payload: json })
    }
}

    return(
        <form className="create" onSubmit={submitForm}>
            <label>Title:</label>
            <input type="text"
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            value={title}
            />
            <label>Loads (kg):</label>
            <input type="number"
            onChange={(e)=>{
                setLoads(e.target.value)
            }}
            value={loads}
            />

            <label>Reps:</label>
            <input type="number"
            onChange={(e)=>{
                setReps(e.target.value)
            }}
            value={reps}
             />

            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Form