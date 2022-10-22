import { useAuthHook } from "../hooks/useAuthHook";
import { useState } from "react";

const LogIn= function() {
    const { dispatch } = useAuthHook()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState(null)

    const logInSubmit = async function (e){
        e.preventDefault()

        const signing = { email, password }

        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(signing),
            headers:  {
                "Content-Type": "application/json"
            }
        }
        )
        const json = await response.json()

        if(!response){
           setError( json.message ) 
        }

        if(response){
            setError(null)
            setEmail("")
            setPassword("")
            dispatch({ type: "LogIn", payload: json })
        }
    }


    return(

        <form className="login" onSubmit={logInSubmit}>
            <h3>LogIn</h3>

            <label>Email:</label>
            <input type="email"
                onChange={function (e){
                    setEmail(e.target.value)
                }}
                value={email}
             />

            <label>Password:</label>
            <input type="text"
                onChange={function (e){
                    setPassword(e.target.value)
                }}
                value={password}
             />
             <button>LogIn</button>
             { error && <p>{error}</p> }
        </form>

    )
}

export default LogIn