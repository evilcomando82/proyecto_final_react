import { Link, NavLink } from "react-router-dom";

const Footer = () =>{


return (




 
 <div>
    <div className="container-fluid bg-dark text-light footer my-4 mb-0 py-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-8">
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-white mb-4">Librería Colores</h4>
                    
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Avenida Pedro Montt 123, Valparaíso, Chile</p>
                 
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@libreriacolores.cl</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Link</h4>
                   <NavLink to={"/"} className="btn btn-link">Inicio</NavLink>
                   <NavLink to={"/about"} className="btn btn-link">Nosotros</NavLink>
         
                   
                </div>
            
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Noticias</h4>
                   
                    <h6 className="text-white mt-4 mb-3">Siguenos en:</h6>
                    <div className="d-flex pt-2">
                    <Link to={"/"} className="btn btn-square btn-outline-light me-1"><i className="fab fa-facebook-f"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-outline-light me-1"><i className="fab fa-twitter"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-outline-light me-1"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-outline-light me-1"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
            </div>

 
   
            
    
 
   <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <span>Librería Colores</span>, Derechos Reservados.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Desarrollado por: <span>Sebastián Navarro Veas</span>
                    <br/>Coderhouse: <span> 2024</span>
                </div>
            </div>
        </div>
    </div>

</div>
)



}

export default Footer;







