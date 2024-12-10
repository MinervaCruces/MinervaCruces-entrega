import { create } from "zustand";

const useCartStore = create((set) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    return {
        cart: storedCart,
        addToCart: (item) =>
            set((state) => {
                const updatedCart = [...state.cart, item];
                localStorage.setItem("cart", JSON.stringify(updatedCart)); 
                return { cart: updatedCart };
            }),
        removeFromCart: (id) =>
            set((state) => {
                const updatedCart = state.cart.filter((item) => item.id !== id);
                localStorage.setItem("cart", JSON.stringify(updatedCart)); 
                return { cart: updatedCart };
            }),
        clearCart: () =>
            set(() => {
                localStorage.setItem("cart", JSON.stringify([]));
                return { cart: [] };
            }),
    };
});

export default useCartStore;
