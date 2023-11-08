import { useState } from "react"

import Input from "./input";
import { CreateUser } from "../services/user-services";


function SignUpForm(){

    const [ formData , setFormData] = useState({
        email : '',
        password: '',
        first_name : '',
        last_name: '',
    })
    
    const {email, password , first_name , last_name} = formData;

    const HandleOnchange = (event) =>{

        const {name , value} = event.target

        setFormData({...formData , [name]: value})
    }

    const HandleSubmit = (event) =>{

        event.preventDefault()

        CreateUser(formData).then((user)=> console.log(user)).catch((error)=> console.log(error))
     
    }

     return(
        
        <div>
            <h3>SignUp Form</h3>
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
                    placeholder="****"  
                    id="password" 
                    value={password} 
                    onChange={HandleOnchange}
                    label="Password" />

                <Input 
                    name="first_name" 
                    value={first_name} 
                    onChange={HandleOnchange}
                    label="Firts name" />

                <Input 
                    name="last_name" 
                    value={last_name} 
                    onChange={HandleOnchange}
                    label="Last name" />

                <button type="submit">Create account</button>
            </form>
        </div>
     )
}

export default SignUpForm