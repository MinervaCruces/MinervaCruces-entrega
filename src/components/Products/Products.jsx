import '../Products/Products.css';
import ItemList from '../ItemList/ItemList';

export default function ProductPage() {
    return (
        <div className="product-page">
            <div className="container mx-auto max-w-[1170px]">
                <ItemList />
            </div>
        </div>
    );
}
