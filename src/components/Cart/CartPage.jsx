import React from "react";
import useCartStore from "../../store/cartStore";
import "../Cart/CartPage.css";

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Tu Carrito</h1>
            {cart.length === 0 ? (
                <p className="cart-empty">El carrito está vacío</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="cart-item-thumbnail"
                                    />
                                    <div>
                                        <p className="cart-item-name">{item.name}</p>
                                        <p className="cart-item-price">
                                            Cantidad: {item.quantity} x ${item.price} = ${item.quantity * item.price}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="cart-item-remove"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-footer">
                        <p className="cart-total">Total: ${total}</p>
                        <button onClick={clearCart} className="cart-clear">
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
