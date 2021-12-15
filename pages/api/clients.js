
export async function fetchClients(){
    const req = await fetch(`${process.env.API_URL}/clients`)
    const data = await req.json()
    return data
}

export async function fetchClient(id){
    const req = await fetch(`${process.env.API_URL}/clients/${id}`)
    const data = await req.json()
    return data
}

