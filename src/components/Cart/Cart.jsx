import React, { useEffect } from 'react'
import axios from 'axios';

const Cart = () => {
    const [products, setProducts] = React.useState([])
    const getdata = async () => {
        try {
            const responsep = await axios.get('http://localhost:3001/products')
            setProducts(responsep.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getdata();
    },[]);

  return (
    <div>
        {
            products.map((product) => {
                if(product.quantity > 0){
                    return(
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                        </div>
                    )
                }else{
                    return(
                        <div>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

export default Cart