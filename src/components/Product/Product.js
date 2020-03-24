import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-name">
                <h3>{props.product.name}</h3>
                <br />
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} left in the stock - Order soon</small></p>
                <button className="main-button"
                onClick={() =>props.handleAddProduct(props.product)}
                > 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;