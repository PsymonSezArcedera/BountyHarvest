import { useState, useEffect } from "react"
import { getOrders } from "../api/orderAPI"
import OrderTile from "../components/OrderTile"
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
        <div className='m-10'>
            <h1 className='text-4xl font-black text-green-950'>ORDERS</h1>
            <div className='flex flex-col flex-wrap justify-stretch content-center'>
                {data.map((order) => {
                    return (
                        <>
                        <OrderTile order={order} person={user}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderPage