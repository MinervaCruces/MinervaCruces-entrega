import Navbar from "../Navbar/Navbar";
import '../Header/Header.css';

export default function HeaderComponent() {
    const Logo = '/Logo.png';

    return (
        <div className="header-container">
            <div className="container mx-auto max-w-[1170px]">
                <div className="flex h-[130px] items-center justify-between">
                    <div>
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div>
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    );
}
