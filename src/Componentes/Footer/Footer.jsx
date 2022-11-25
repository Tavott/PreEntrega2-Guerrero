import Navbar from '../Header/Navbar';
//import Layout from '../Layout';
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <footer>
            <Navbar isInHeader={false} />           
            <div className="copyright">
                © 2022 Copyright
                <a href="https://www.linkedin.com/in/gustavo-guerrero-15a525b8/" target="blank">
                    {" "}
                    Gustavo Guerrero
                </a>
            </div>
        </footer>
    );
};

export default Footer;
