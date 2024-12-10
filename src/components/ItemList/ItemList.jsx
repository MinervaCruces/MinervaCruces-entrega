import './ItemList.css';
import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);
    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return (
        <div className="itemlist-container">
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="itemlist-wrapper">
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
