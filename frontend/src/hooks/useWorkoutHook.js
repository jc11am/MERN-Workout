import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContest";


export const useWorkoutHook = function(){
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error("useWorkoutHook must be used inside an WorkoutContextProvider")
    }

    return context
}


