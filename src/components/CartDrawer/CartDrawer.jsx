import React from "react";
import useCartStore from "../../store/cartStore";

export default function CartDrawer() {
    const { cart, removeItem } = useCartStore();

    return (
        <div className="cart-drawer">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
