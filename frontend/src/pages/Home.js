import {useState ,useEffect } from "react"
import WorkoutDetail from "../component/WorkoutDetail"



const Home = function(){

    const [ workouts, setWorkouts ] = useState(null)

    useEffect(function(){
        const fetchData = async function(){
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok){
             setWorkouts(json)
            }
        }
        fetchData()
    },[workouts])


    return(
        <div className="home">
            <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetail key={workout._id} workout={workout} />
            ))}
            </div>
        </div>
    )
}

export default Home