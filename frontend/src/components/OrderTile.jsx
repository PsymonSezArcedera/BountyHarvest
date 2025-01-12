import { useState } from "react"

function OrderTile({order,person}){

    return (
        <div className="flex flex-row m-4 w-full bg-gray-100 rounded-lg">
            <img src={order.image} alt="product image" className="w-64 h-64 object-cover m-4 rounded-lg"/>
            <div className="flex flex-col m-4 justify-evenly">
                <h2 className="text-xs font-extralight text-yellow-500">{order._id}</h2>
                <h1 className="text-3xl font-bold bg-green-950 p-4 text-yellow-500 rounded-lg w-fit">{order.product}</h1>
                <div className="mt-2">
                    <div className="flex flex-row ">
                        <h1 className="text-base font-light mr-2">Quantity:</h1>
                        <h1 className="text-base font-semibold text-green-950">{order.quantity} kg </h1>
                    </div>
                    <div className="flex flex-row ">
                        <h1 className="text-base font-light mr-2">Address:</h1>
                        <h1 className="text-base font-semibold text-green-950">{order.address} </h1>
                    </div>
                    <div className="flex flex-row ">
                        <h1 className="text-base font-light mr-2">Total price:</h1>
                        <h1 className="text-base font-semibold text-green-950">Php {order.price} </h1>
                    </div>
                    <div className="flex flex-row ">
                        <h1 className="text-base font-light mr-2">Status:</h1>
                        <h1 className="text-base font-semibold text-green-950">{order.status}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTile