
export async function fetchDeliveryTypes(){
    const req = await fetch(`${process.env.API_URL}/delivery_types`)
    const data = await req.json()
    return data
}

export async function fetchDeliveryType(id){
    const req = await fetch(`${process.env.API_URL}/delivery_types/${id}`)
    const data = await req.json()
    return data
}

