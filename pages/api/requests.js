
import api from "./axios"


export async function fetchRequests(){
    const req = await api.get(`/requests`)
    return req.data
}

export async function fetchRequest(id){
    const req = await api.get(`/requests/${id}`)
    return req.data
}

export async function createRequests(payload){
    const req = await api.post(`/requests/`, payload,{
        headers: {
            "Content-Type": "application/json",
        }
    })
    return req.data
}

export async function createEagalRequests(payload){
    const req = await api.post(`/requests/eagle-store`, payload, {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })
    return req.data
}

export async function updateRequests(id, payload){
    const req = await api.put(`/requests/${id}`, payload,{
        headers: {
            "Content-Type": "application/json",
        }
    })
    return req.data
}
