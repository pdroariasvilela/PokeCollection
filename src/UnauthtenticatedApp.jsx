import { useState } from "react"
import LoginForm from "./components/login-form"
import SignUpForm from "./components/signup-form"

function UnauthtenticatedApp({onLogin , onSignUp}) {


    const [showLogin, setShowLogin] = useState(true)

    const handleClick = () => {
        setShowLogin(!showLogin)
    }


    return (
        <div>
            <h1>Welcome</h1>
            {showLogin ? <LoginForm onLogin = {onLogin} /> : <SignUpForm  onSignUp = {onSignUp}/>}
            <button onClick={handleClick}>
                {showLogin ? "Create Account" : "Login"}
            </button>
        </div>
    )
}

export default UnauthtenticatedApp