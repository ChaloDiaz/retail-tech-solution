
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sertecno</h3>
            <p className="text-gray-400 mb-4">
              Soluciones tecnológicas especializadas para el sector retail y e-commerce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-tech-blue transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-tech-blue transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-tech-blue transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-tech-blue transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Programación</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte Técnico</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Almacenamiento de Datos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Desarrollo Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Bases de Datos</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#soluciones" className="text-gray-400 hover:text-white transition-colors">Soluciones</a>
              </li>
              <li>
                <a href="#especialidades" className="text-gray-400 hover:text-white transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400">
              Av. Tecnología 1234<br />
              Ciudad Innovación, CP 12345<br /><br />
              <span className="block mb-2">contacto@sertecno.com</span>
              <span className="block">+52 123 456 78</span>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} Sertecno Servicios Integrales SA. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
