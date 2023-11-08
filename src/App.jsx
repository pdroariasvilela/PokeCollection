import { useState } from "react"
import LoginForm from "./components/login-form"
import SignUpForm from "./components/signup-form"

function App(){

     const [showLogin , setShowLogin] = useState(true)

     const handleClick = () =>{
          setShowLogin(!showLogin)
     }

     return(
        
        <div>
          <h1>Welcome to PokeCollection</h1>
          {showLogin ? <LoginForm/> : <SignUpForm/> }
          <button onClick={handleClick}>
               {showLogin? "Create Account" : "Login"}
          </button>
        </div>
     )
}

export default App