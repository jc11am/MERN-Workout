import { useWorkoutHook } from "../hooks/useWorkoutHook"
import { useAuthHook } from "../hooks/useAuthHook"

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetail = function({ workout }) {
    const { dispatch } = useWorkoutHook() 
    const { user } = useAuthHook()


    const handleDelete = async function() {

        if(!user) {
            return
        }

        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${user.token}`}
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
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className="material-icons" onClick={handleDelete}>delete</span>

        </div>
    )
}

export default WorkoutDetail