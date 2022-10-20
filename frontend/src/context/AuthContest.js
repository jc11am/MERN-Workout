import { createContext, useReducer } from "react";

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
    })

    return(
        <AuthContest.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContest.Provider>
    )

}