import { useState } from "react"
import { createOrder } from "../api/orderAPI"
import { updateProduct } from "../api/productAPI";

function ProductTile({product,person}){
    const [quantity, setQuantity] = useState(1)
    const increment = () => {
        setQuantity((prev) => prev + 1);
      };
    
    const decrement = () => {
    setQuantity((prev) => {
            if (prev == 1) return prev;
            return prev - 1;
        });
    };
    

    async function handleOrder(){
        if(quantity > product.stock){
            alert("Not enough stocks!")
            return
        }
        const submitOrder = {
            person: person.user.firstName.concat(" ", person.user.lastName),
            product: product.item,
            image: product.image,
            address: person.user.address,
            price: product.price,
            status : "To ship",
            quantity: quantity
        }

        const updatedProduct = {
            item : product.item,
            price : product.price,
            stock : product.stock - quantity,
            image : product.image
        }

        await createOrder(submitOrder)
        await updateProduct(product._id, updatedProduct)
        
    }

    return (
        <div className="m-10">
            <img src={product.image} alt="product image" className="w-64 h-64 object-cover"/>
            <div className="pt-2 pb-2 text-left">
                <h1 className="text-xl font-semibold m-2">{product.item}</h1>
                <div className="flex justify-between m-2">
                    <h2 className="text-sm font-medium">Php {product.price}</h2>
                    <h2 className="text-sm font-light">Stocks: {product.stock} kg</h2>
                </div>
                <div className="flex justify-between m-4">
                    <button onClick={decrement} className="bg-green-950 text-white font-black w-12 rounded-lg">-</button>
                    <h2 className="text-sm font-medium">{quantity} kg</h2>
                    <button onClick={increment} className="bg-green-950 text-white font-black w-12 rounded-lg">+</button>
                </div>
            </div>
            <button onClick = {handleOrder} className="bg-green-950 w-64 h-12 text-white font-bold cursor-pointer hover:bg-green-800">ORDER</button>
        </div>
    )
}

export default ProductTile