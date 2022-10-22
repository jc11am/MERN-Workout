import { useState } from "react";
import { useSignUpHook } from "../hooks/useSignUpHook";

const SignUp = function() {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const { SignUp, error, isLoading } = useSignUpHook()

    const signUpSubmit = async function (e){
        e.preventDefault()

        await SignUp( email, password )


    }


    return(

        <form className="signup" onSubmit={signUpSubmit}>
            <h3>Sign Up</h3>

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
             <button disabled={isLoading}>SignUp</button>
             { error && <div className="error">{error}</div> }
        </form>

    )
}

export default SignUp