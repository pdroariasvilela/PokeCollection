import { useEffect, useState } from "react"
import AuthtenticatedApp from "./AuthenticatedApp"
import UnauthtenticatedApp from "./UnauthtenticatedApp"


import { getUser } from "./services/user-services"
import Login from "./services/auth-services"

function App(){

     const [user , setUser] = useState(null)

     useEffect(() => {

          getUser().then(user => setUser(user)).catch(error => console.log(error))
          //getUser - para preguntar si existe el token en el sessionStorage
      }, [])

      function handleLogin (credentials){

          // Login(credentials).then(setUser).catch(console.log)
          Login(credentials).then( user => setUser(user)).catch(error => console.log(error))
      }

     console.log(user)

     return user ? <AuthtenticatedApp/> : <UnauthtenticatedApp onLogin = {handleLogin}/>

}

export default App