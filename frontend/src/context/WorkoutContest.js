import { createContext, useReducer } from "react";


export const WorkoutContext = createContext()

 export const workoutFunction = function( state, action ){
    switch( action.type ){
        case "Get_All":
            return {
                workouts: action.payload
            }
        case "Create_Workouts":
            return {
                workouts:[action.payload, ...state.workouts]
            }

        case "Delete_Item":
            return {
                workouts: state.workouts.filter(workout => workout._id !== action.payload._id) 
            }
        default:
            return state


    }
}

 export const WorkoutContextProvider = function({ children }){

    const [ state, dispatch ] = useReducer( workoutFunction, {
        workouts: null
    } )


    return(
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )

}

