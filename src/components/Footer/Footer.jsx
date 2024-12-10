import '../Footer/Footer.css';

export default function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-column logo-column">
                <img src="\Logo.png" alt="Murci Store Logo" className="footer-logo" />
                <p>¿Necesitas ayuda?</p>
                <a href="mailto:contacto@murcistore.cl" className="footer-link">contacto@murcistore.cl</a>
            </div>
            <div className="footer-column">
                <h3 className="footer-title">Visítanos</h3>
                <p>Visita nuestro Blog de Noticias</p>
                <a href="/terminos" className="footer-link">Términos y Condiciones</a>
            </div>
            <div className="footer-column social-column">
                <h3 className="footer-title">Síguenos</h3>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">F</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">I</a>
            </div>
            <div className="footer-column">
                <h3 className="footer-title">Productos</h3>
                <ul className="footer-list">
                    <li><a href="/products/Accesorios" className="footer-link">Accesorios</a></li>
                    <li><a href="/products/Perros" className="footer-link">Perros</a></li>
                    <li><a href="/products/Gatos" className="footer-link">Gatos</a></li>
                    <li><a href="/products/Perros y Gatos" className="footer-link">Perros y Gatos</a></li>
                </ul>
            </div>
        </footer>
    );
}
