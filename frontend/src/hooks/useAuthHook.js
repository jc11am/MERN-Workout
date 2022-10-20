import { useContext } from "react";
import {AuthContest} from "../context/AuthContest"

export const AuthHook = function(){
    const AuthValue = useContext(AuthContest)

    if(!AuthValue){
        throw Error("useAuthHook must be used inside an AuthContextProvider")
    }

    return AuthValue
}