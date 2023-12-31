import React from 'react';
import '../Static/Css/footer.css'
import logo from '../Static/Images/logof.png';
import { Link }from 'react-router-dom';



export default function FooterComponent() {
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    return (
        <>
            <footer>
            <div className='footer-container'>
                <div className='container-full row'>
                    <div className='s1 section col-md-3'>
                        <Link to="/NoLimitSolutionsTI">
                            <img src={logo} alt="NoLimitSolutionsTI" />
                            <p style={{color :"#fff"}}>NL Solutions TI</p>
                        </Link>

                    </div>
                    <div className='section col-md-2'>
                        <p>Explora</p>
                        <Link to="/NoLimitSolutionsTI">Inicio</Link>
                        <Link to="/servicios">Servicios</Link>
                         <Link to="/nosotros">Nosotros</Link>
                         <Link to="/contacto">Contactanos</Link>
                    </div>
                    <div className='section col-md-3'>
                        <p className='cont'>Contacto</p>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                                <a href="mailto:nolimitsolutionsti@gmail.com" target='_blank'>nolimitsolutionsti@gmail.com</a>
                        </div>
                        <div>
                            <i class="fab fa-whatsapp"></i>
                                <a href="https://wa.link/7listk" target='_blank'>+51 941778278</a>
                        </div>
                    </div>
                    <div className='section  col-md-3 s4'>
                        <p>Siguenos</p>
                        <a href="https://www.facebook.com/NLSolutionsTI/" target='_blank'>Facebook</a>
                        <a href="https://www.linkedin.com/" target='_blank'>LinkedIn</a>
                        <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                    </div>
                <div className='row'>
                <p className='pie-text'>© 2023 NL Solutions TI - Todos los derechos reservados</p>
                </div>
                </div>
            </div>
            </footer>
        </>
    )
}
