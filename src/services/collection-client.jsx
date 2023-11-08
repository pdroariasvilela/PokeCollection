import { BASE_URI , tokenKey } from "../config";

async function collection(enpoint , {method , headers , body} = {}){

    const token = sessionStorage.getItem(tokenKey)

    if(token){
        headers = {
            Autorizathion :`Bearer ${token}`,
            ...headers,
        }
    }

    if(body){
        headers = {
            'Content-type': 'application/json',
            ...headers,
        }
    }

    const config = {
        method  : method || body? 'POST' : 'GET',
        headers : headers,
        body : body ? JSON.stringify(body) : null
    }

    const response = await fetch(BASE_URI + enpoint , config)

    let data;

    if(!response.ok){
        try {
            data = await response.json()

        } catch (error) {

            throw new Error(response.statusText)
        }

        throw new Error(data.errors)
    }

    try {
        data = await response.json()
    } catch (error) {
        data = response.statusText
    }

    return data
}

export default collection