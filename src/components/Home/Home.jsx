import ItemList from "../ItemList/ItemList";
import "../Home/Home.css"; 

export default function HomePage() {
    const imgBanner = './fondo.jpg'; 

    return (
        <div>
            <div 
                className="home-banner"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="home-banner-content">
                    <h1 className="home-banner-title">
                        BIENVENIDO A MURCI STORE
                    </h1>
                    <h3 className="home-banner-description">
                        Este es el lugar ideal para encontrar ropa y accesorios especiales para consentir a tu mascota.
                        Nos apasiona ofrecerte productos únicos que combinan estilo y comodidad para que tu compañero peludo siempre luzca increíble.
                        Explora nuestra colección y dale a tu mejor amigo el toque especial que se merece. ¡Tu mascota siempre merece lo mejor!
                    </h3>
                    <h1 className="home-banner-subtitle">
                        PRODUCTOS SELECCIONADOS
                    </h1>
                </div>
            </div>
            <ItemList />
        </div>
    );
}
