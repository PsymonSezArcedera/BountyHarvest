import { useState, useEffect } from "react";
import { getProducts} from '../api/productAPI'
import ProductTile from "../components/productTile";

function ProductPage(){
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadProducts(){
          let data = await getProducts()
          data.sort((a, b) => a.item.localeCompare(b.item))
          if(data){
            setData(data)
          }
        }
        loadProducts()
      }, [])

    return (
    <div className='m-10'>
        <h1 className='text-4xl font-black text-green-950'>PRODUCTS</h1>
        <div className='flex flex-row flex-wrap justify-stretch'>
        {data.map((product) => {
            if(product.stock >= 0){
            return (
                <>
                <ProductTile product={product}/>
                </>
            )
            }
        })}
        </div>
    </div>
    )
}

export default ProductPage

