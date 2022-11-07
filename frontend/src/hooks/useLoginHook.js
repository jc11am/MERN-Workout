import { useAuthHook } from "./useAuthHook";
import { useState } from "react";

export const useLoginHook = function() {
    const { dispatch } = useAuthHook()

    const [ isLoading, setIsLoading ] = useState(null)
    const [ error, setError ] = useState(null)


    const login = async function(email, password ){
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://mernworkoutss.herokuapp.com/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers:  {
                "Content-Type": "application/json"
            }
        }
        
        )
        const json = await response.json()

        
    if(!response.ok){
        setError(json.error)
        setIsLoading(false)
    }

    if(response.ok){
        //save user to local storage
        localStorage.setItem("user", JSON.stringify(json))

        // update Auth contest
        dispatch({ type: "LogIn", payload: json })

        setIsLoading(false)
    }

    }

   

    return { login, error, isLoading }

}