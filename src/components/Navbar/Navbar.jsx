import React from "react";
import { Link } from "react-router-dom";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import { Bars2Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import useCartStore from "../../store/cartStore";
import "./CustomNavbar.css";

const categories = [
    { name: "Gatos", categoryId: "Gatos" },
    { name: "Perros", categoryId: "Perros" },
    { name: "Accesorios", categoryId: "Accesorio" },
    { name: "Perros y Gatos", categoryId: "Perros y Gato" },
];

export default function CustomNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = React.useState(false);
    const cart = useCartStore((state) => state.cart);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);

    return (
        <Navbar className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-links">
                    <Link to="/" className="link">
                        Inicio
                    </Link>
                    <Link to="/products" className="link">
                        Tienda
                    </Link>
                    <div
                        className="categories-dropdown"
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                        onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                        <button className="link">Categorías</button>
                        {isCategoriesOpen && (
                            <div className="categories-menu">
                                <ul className="categories-list">
                                    {categories.map((category) => (
                                        <li key={category.categoryId} className="category-item">
                                            <Link
                                                to={`/category/${category.categoryId}`}
                                                className="category-link"
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className="link">
                        Nosotros
                    </Link>
                    <Link to="/contact" className="link">
                        Contáctenos
                    </Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="relative">
                        <ShoppingCartIcon className="cart-icon" />
                        {cartCount > 0 && (
                            <span className="cart-count">{cartCount}</span>
                        )}
                    </Link>
                </div>

                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="menu-button"
                >
                    <Bars2Icon className="menu-icon" />
                </IconButton>

                <MobileNav open={isNavOpen}>
                    <div className="mobile-menu">
                        <Link to="/" className="link">
                            Inicio
                        </Link>
                        <Link to="/products" className="link">
                            Tienda
                        </Link>
                        {categories.map((category) => (
                            <Link
                                key={category.categoryId}
                                to={`/category/${category.categoryId}`}
                                className="category-link"
                            >
                                {category.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="link">
                            Contáctenos
                        </Link>
                        <Link to="/about" className="link">
                            Nosotros
                        </Link>
                    </div>
                </MobileNav>
            </div>
        </Navbar>
    );
}
