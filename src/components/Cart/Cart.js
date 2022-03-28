import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        // console.log(quantity);
    }
    // const tax = (total * 0.1).toFixed(2);
    const tax = parseFloat((total * .1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price :{total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;