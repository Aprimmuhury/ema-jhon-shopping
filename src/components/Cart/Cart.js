import React from 'react';
import "./Cart.css"
const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tex = (total * 0.1).toFixed(2);

    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>tax:{tex}</p>
            <h5>Grand Total:</h5>
        </div>
    );
};

export default Cart;