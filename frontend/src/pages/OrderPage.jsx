import { useState, useEffect } from "react"
import { getOrders } from "../api/orderAPI"
import * as jwt_decode from "jwt-decode"

function OrderPage(){
    const [data, setData] = useState([])
    const [user, setUser] = useState({})

    useEffect(()=>{
        async function loadOrders(){
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode.jwtDecode(token)
            const allOrders = await getOrders()
            const filteredOrders = allOrders.filter((order) => order.person == (decodedUser.user.firstName.concat(" ", decodedUser.user.lastName)))
            setData(filteredOrders)
            setUser(decodedUser)
        }
        loadOrders()
    },[])
    
    return(
        <>
            Order Page
            {data.map((order) => {
                return(
                    <>
                        {order.product}
                    </>
                )
            })}
        </>
    )
}

export default OrderPage