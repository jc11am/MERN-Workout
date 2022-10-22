import { useAuthHook } from "../hooks/useAuthHook"

export const useLogoutHook = function(){
    const { dispatch } = useAuthHook()

    const logOut = function(){
        //delete token from local storage
        localStorage.removeItem("user")

        //update Authcontext
        dispatch({ type: "LogOut" })
    }
    return { logOut }

} 