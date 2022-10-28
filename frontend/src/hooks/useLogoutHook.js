import { useAuthHook } from "../hooks/useAuthHook"
import { useWorkoutHook } from "./useWorkoutHook"

export const useLogoutHook = function(){
    const { dispatch } = useAuthHook()
    const { dispatch : workoutDispatch } = useWorkoutHook()

    const logOut = function(){
        //delete token from local storage
        localStorage.removeItem("user")

        //update Authcontext
        dispatch({ type: "LogOut" })

        workoutDispatch({ type: "Get_All", payload: null })
    }
    return { logOut }

} 