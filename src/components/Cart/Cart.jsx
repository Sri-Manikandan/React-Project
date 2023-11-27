import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemove = async (id) => {
        try {
            const updatedProducts = products.map(prod => {
                if (prod.id === id && prod.quantity > 0) {
                    const updatedQuantity = prod.quantity - 1;
                    axios.patch(`http://localhost:3001/products/${id}`, { quantity: updatedQuantity });
                    return { ...prod, quantity: updatedQuantity };
                }
                return prod;
            });
            setProducts(updatedProducts.filter(prod => prod.quantity > 0));
        } catch (error) {
            setError('Error updating quantity. Please try again.');
        }
    };

    const handleAdd = async (id) => {
        try {
            const updatedProducts = products.map(prod => {
                if (prod.id === id) {
                    const updatedQuantity = prod.quantity + 1;
                    axios.patch(`http://localhost:3001/products/${id}`, { quantity: updatedQuantity });
                    return { ...prod, quantity: updatedQuantity };
                }
                return prod;
            });
            setProducts(updatedProducts);
        } catch (error) {
            setError('Error updating quantity. Please try again.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if(products.length === 0) return (<div className='cartPage'>No items in cart</div>);

    return (
        <div className='cartPage'>
            {products.map((product) => {
                if(product.quantity === 0) return null;
                const total = Number(product.price) * Number(product.quantity);
                return (
                    <div className="cart" key={product.id}>
                        <div className="cart-img">
                            <img src={product.image} alt=""/>
                        </div>
                        <div className="cart-details">
                            <h2>{product.name}</h2>
                            <h2>${product.price}</h2>
                            <h2>{product.quantity}</h2>
                            <h2>${total}</h2>
                        </div>
                        <div className='cart-function'>
                            <button onClick={() => handleAdd(product.id)}>Add</button>
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
