import axios from "axios"

const URL = "http://localhost:3000/orders"

export async function getOrders(){
    const response = await axios.get(`${URL}/`)
    if(response.status == 200){
        return response.data
    }
    else{
        return
    }
}

export async function createOrder(order){
    const response = await axios.post(`${URL}/create`, order)
    return response
}