import { createContext, useReducer, useEffect } from "react";

export const AuthContest = createContext()

export const AuthReducer = ( state, action ) => {
    switch ( action.type ){
        case "LogIn":
            return { user: action.payload }

        case "LogOut":
            return { user: null }

        default:
            return state
    }

}

export const AuthContestProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AuthReducer, {
        user: null
    } )
    useEffect(function(){
        const token = JSON.parse(localStorage.getItem("user"))

        if(token) {
            dispatch({ type: "LogIn", payload: token }) 
        }
    }, [])
    

    return(
        <AuthContest.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContest.Provider>
    )

}