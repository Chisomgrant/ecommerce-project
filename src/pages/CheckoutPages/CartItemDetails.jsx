import React from 'react'
import dayjs from 'dayjs'
import { useState } from 'react'
import axios from 'axios'
import { formatMoney } from '../../utils/money'
import DeliveryOptions from './DeliveryOptions'

const CartItemDetails = ({ cartItem, selectedDeliveryOption, deliveryOptions, loadCart, deleteCartItem }) => {

    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [newQuantity, setNewQuantity] = useState(cartItem.quantity);

    const updateCartItem = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(newQuantity)
        });
        setIsUpdatingQuantity(false);
        await loadCart();
    }

    return (
        <>
            <div key={cartItem.productId} className="cart-item-container">
                <div className="delivery-date">
                    Delivery date:{" "}
                    {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                        "dddd, MMMM, D",
                    )}
                </div>

                <div className="cart-item-details-grid">
                    <img className="product-image" src={cartItem.product.image} />

                    <div className="cart-item-details">
                        <div className="product-name">{cartItem.product.name}</div>
                        <div className="product-price">
                            {formatMoney(cartItem.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                            <span>
                                Quantity:{" "}

                                {isUpdatingQuantity ? (
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={newQuantity}
                                        onChange={(e) => setNewQuantity(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateCartItem();
                                            }

                                            if (e.key === "Escape") {
                                                setNewQuantity(cartItem.quantity);
                                                setIsUpdatingQuantity(false);
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="quantity-label">
                                        {cartItem.quantity}
                                    </span>
                                )}

                            </span>

                            <span
                                className="update-quantity-link link-primary"
                                onClick={() => setIsUpdatingQuantity(true)}
                            >
                                Update
                            </span>
                            <span className="delete-quantity-link link-primary"
                                onClick={deleteCartItem}>
                                Delete
                            </span>
                        </div>
                    </div>
                    <DeliveryOptions
                        cartItem={cartItem}
                        deliveryOptions={deliveryOptions}
                        loadCart={loadCart}
                    />
                </div>
            </div>
        </>
    )
}

export default CartItemDetails