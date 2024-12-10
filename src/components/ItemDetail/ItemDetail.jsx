import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock.jsx";
import Loading from "../Loading/Loading.jsx";
import imgBanner from "/fondo.jpg";
import useCartStore from "../../store/cartStore";
import "../ItemDetail/ItemDetail.css";

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const precioTotal = product.price * quantity;

    const handleAddToCart = () => {
        if (product.stock > 0) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity,
                total: precioTotal,
                img: product.img,
            });
            alert(`${product.name} añadido al carrito con éxito!`);
        }
    };

    if (loading) {
        return <div className="container mx-auto max-w-[1170px]"><Loading /></div>;
    }

    if (!product) {
        return <div>No disponible</div>;
    }

    return (
        <div
            className="item-detail-container"
            style={{
                backgroundImage: `url(${imgBanner})`,
            }}
        >
            <div className="item-detail-card">
                <div className="item-detail-grid">
                    <div className="item-image">
                        <img src={product.img} alt="Imagen del producto" className="product-image" />
                    </div>
                    <div>
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-description">{product.description}</p>
                        <div>
                            <h3>Tallas disponibles:</h3>
                            <ul className="sizes-list">
                                {(product.sizes || []).map((size, index) => (
                                    <li key={index} className="size-item">
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="product-stock">Stock disponible: {product.stock}</p>
                        <div className="quantity-controls">
                            <button
                                onClick={decrementQuantity}
                                className="quantity-button decrement"
                                disabled={product.stock === 0}
                            >
                                -
                            </button>
                            <p className="quantity-value">{quantity}</p>
                            <button
                                onClick={incrementQuantity}
                                className="quantity-button increment"
                                disabled={product.stock === 0}
                            >
                                +
                            </button>
                        </div>
                        <p className="product-price">Precio: ${product.price}</p>
                        <p className="total-price">Precio Total: ${precioTotal}</p>
                        <button
                            onClick={handleAddToCart}
                            className={`add-to-cart-button ${product.stock === 0 ? "disabled" : ""}`}
                            disabled={product.stock === 0}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
