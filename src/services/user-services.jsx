import {tokenKey } from "../config";
import collection from "./collection-client";

export async function CreateUser(dataForm){

    const {token , ...user}  = await collection('/signup' , {
        body : dataForm
    })

    
    sessionStorage.setItem(tokenKey , token)

    return user
}

export async function getUser(){

    const {token , ...user} = await collection('/profile')

    return user
}