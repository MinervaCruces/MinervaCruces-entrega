import murci from '/murci.png';
import '../About/About.css';

export default function AboutPage() {
    const imgBanner = './fondo.jpg';

    return (
        <div
            className="about-page-banner"
            style={{ backgroundImage: `url(${imgBanner})` }}
        >
            <div className="about-page-container">
                <h1 className="about-page-title">SOBRE NOSOTROS</h1>
                <p className="about-page-description">
                    ¡Bienvenidos a MurciStore, el lugar donde cada producto narra una historia de
                    cariño y compromiso hacia nuestros adorables compañeros! Nuestra tienda está
                    diseñada especialmente para quienes consideran a sus mascotas como miembros de
                    la familia, ofreciendo no solo accesorios, sino también las mejores prendas que
                    reflejan su carácter y estilo.
                    <br />
                    En MurciStore, comprendemos que cada mascota es especial y merece lo mejor. Por
                    eso, nos hemos comprometido a presentar una cuidadosa selección de productos que
                    combinan calidad, confort y un toque creativo. Desde suaves pijamas hasta
                    collares elegantes, cada artículo representa nuestra pasión por los animales y
                    nuestro deseo de alegrar la vida de nuestros amigos peludos.
                    <br />
                    La inspiración detrás de MurciStore proviene de nuestra propia mascota, quien
                    nos enseñó el valor de los momentos compartidos. Cada producto que ofrecemos
                    está pensado para fortalecer esos vínculos, haciendo que cada paseo, cada juego
                    y cada descanso sea memorable.
                    <br />
                    Únete a nuestra comunidad de amantes de las mascotas y descubre todo lo que
                    MurciStore tiene para ti. ¡Porque en MurciStore, cada compra es un paso más hacia
                    la felicidad de tu compañero!
                </p>
                <img src={murci} alt="murci" className="about-page-image" />
            </div>
        </div>
    );
}
