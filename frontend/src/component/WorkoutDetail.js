import { useWorkoutHook } from "../hooks/useWorkoutHook"

const WorkoutDetail = function({ workout }) {
    const { dispatch } = useWorkoutHook() 


    const handleDelete = async function() {
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({ type: "Delete_Item", payload: json })
        }
    }




    return(
        <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.loads}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleDelete}>Delete</span>

        </div>
    )
}

export default WorkoutDetail