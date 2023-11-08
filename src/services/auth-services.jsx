import { tokenKey } from "../config";
import collection from "./collection-client";

export default  async function Login (credentials) {

    //Destructuramos lo que viene de Collection , aislamos el Token y creamos
    //un nuevo objeto user pasando todo menos el token.
    const {token , ...user} = await collection('/login' ,{
        body : credentials,
    });

    
    //Guardamos el token en SessionoStorage
    sessionStorage.setItem(tokenKey , token);


    //Retornamos lo que habia en 'user' , menos el 'token'.
    return user;
}

// async function logout(token){
    

// }


