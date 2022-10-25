import { useEffect } from "react"
import WorkoutDetail from "../component/WorkoutDetail"
import Form from "../component/Form"
import { useWorkoutHook } from "../hooks/useWorkoutHook"
import { useAuthHook } from "../hooks/useAuthHook"

const Home = function(){
    const { user } = useAuthHook()

    const { workouts,  dispatch } = useWorkoutHook()

    useEffect(function(){
        const fetchData = async function(){
            const response = await fetch("/api/workouts", {
                headers: { "Authorization": `Bearer ${user.token}`}
            })
            const json = await response.json()

            if(response.ok){
             dispatch( { type: "Get_All", payload: json } )
            }
        }

        if(user) {
            fetchData() 
        }

    },[dispatch, user])


    return(
        <div className="home">
            <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetail key={workout._id} workout={workout} />
            ))}
            </div>
            <Form/>
        </div>
    )
}

export default Home