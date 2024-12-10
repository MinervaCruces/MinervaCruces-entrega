import { Link } from "react-router-dom";
import '../Item/Item.css';

export default function Item({ id, name, price, img }) {
    const imgBanner = './fondo.jpg';
    return (
        <div className="item-card" style={{ backgroundImage: `url(${imgBanner})` }}>
            <Link to={`/products/${id}`}>
                <img src={img} alt="Imagen Productos" className="product-img" />
            </Link>
            <Link to={`/products/${id}`} className="product-name">{name}</Link>
            <h4 className="product-price">$ {price}</h4>
        </div>
    );
}
