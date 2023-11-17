import collection from "./collection-client";

export async function createFavorite(data){
    return await collection("/favorites" ,{
        body : data
    })
}