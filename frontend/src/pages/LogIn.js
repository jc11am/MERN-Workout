import { useState } from "react";
import { useLoginHook } from "../hooks/useLoginHook"

const LogIn= function() {
    const { login, isloading, error } = useLoginHook()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const logInSubmit = async function (e){
        e.preventDefault()


        await login(email, password)
        
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
             <button disabled={isloading}>LogIn</button>
             { error && <p>{error}</p> }
        </form>

    )
}

export default LogIn