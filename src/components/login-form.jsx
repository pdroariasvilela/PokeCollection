import { useState } from "react"

import Input from "./input";
import Login from "../services/auth-services";

function LoginForm({onLogin}){

    const [ formData , setFormData] = useState({
        email : 'pedroar@mail.com',
        password: 'pedro1998'
    })
    
    const {email, password} = formData;

    const HandleOnchange = (event) =>{

        const {name , value} = event.target

        setFormData({...formData , [name]: value})
    }

    const HandleSubmit = (event) =>{

        event.preventDefault()

       onLogin(formData)
     
    }

     return(
        
        <div>
            <h3>Login</h3>
            <form onSubmit={HandleSubmit}>
                
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    id="email" 
                    value={email} 
                    onChange={HandleOnchange}
                    label='Email'
                 />

                
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="example@mail.com" 
                    id="password" 
                    value={password} 
                    onChange={HandleOnchange}
                    label="Password" />

                <button type="submit">Login</button>
            </form>
        </div>
     )
}

export default LoginForm