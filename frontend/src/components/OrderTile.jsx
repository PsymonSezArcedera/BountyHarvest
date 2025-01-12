import { useState } from "react"

function OrderTile({order,person}){

    return (
        <div className="flex flex-row m-4 w-full bg-gray-200 rounded-lg">
            <img src={order.image} alt="product image" className="w-64 h-64 object-cover m-4 rounded-lg"/>
            <div className="flex flex-col m-4 justify-evenly">
                <h2 className="text-sm font-extralight">{order._id}</h2>
                <h1 className="text-3xl font-semibold ">{order.product}</h1>
                <div className="mt-2">
                    <h1 className="text-lg font-semibold">Quantity: {order.quantity} kg </h1>
                    <h1 className="text-lg font-semibold">Address: {order.address} </h1>
                    <h1 className="text-lg font-semibold">Status: {order.status} </h1>
                </div>
            </div>
        </div>
    )
}

export default OrderTile