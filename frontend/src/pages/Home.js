import { useEffect } from "react"
import WorkoutDetail from "../component/WorkoutDetail"
import Form from "../component/Form"
import { useWorkoutHook } from "../hooks/useWorkoutHook"

const Home = function(){

    const { workouts,  dispatch } = useWorkoutHook()

    useEffect(function(){
        const fetchData = async function(){
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok){
             dispatch( { type: "Get_All", payload: json } )
            }
        }
        fetchData()
    },[dispatch])


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