


export async function fetchRequests(){
    const req = await fetch(`${process.env.API_URL}/requests`)
    const data = await req.json()
    return data
}

export async function fetchRequest(id){
    const req = await fetch(`${process.env.API_URL}/requests/${id}`)
    const data = await req.json()
    return data
}

export async function createRequests(payload){
    const req = await fetch({
        url: `${process.env.API_URL}/requests`,
        method: 'POST',
        body: payload
    })
    const data = await req.json()
    return data
}

export async function updateRequests(id, payload){
    const req = await fetch({
        url: `${process.env.API_URL}/requests/${id}`,
        method: 'PUT',
        body: payload
    })
    const data = await req.json()
    return data
}

