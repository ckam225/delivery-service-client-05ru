
import api from "./axios"

export async function fetchDelivers(){
    const req = await api.get(`/delivers`)
    return req.data
}

export async function fetchDeliver(id){
    const req = await api.get(`/delivers/${id}`)
    return req.data
}

export async function createDeliver(payload){
    const req = await api.post(`/delivers/`, payload,{
        headers: {
            "Content-Type": "application/json",
        }
    })
    return req.data
}