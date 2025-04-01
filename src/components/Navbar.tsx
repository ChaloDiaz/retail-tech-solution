
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-tech-blue">TechRetail</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-tech-dark hover:text-tech-blue font-medium transition-colors">
            Servicios
          </a>
          <a href="#soluciones" className="text-tech-dark hover:text-tech-blue font-medium transition-colors">
            Soluciones
          </a>
          <a href="#especialidades" className="text-tech-dark hover:text-tech-blue font-medium transition-colors">
            Especialidades
          </a>
          <a href="#contacto" className="text-tech-dark hover:text-tech-blue font-medium transition-colors">
            Contacto
          </a>
          <Button className="bg-tech-blue hover:bg-tech-blue/80">
            Consulta Gratis
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-dark p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-4">
            <a 
              href="#servicios" 
              className="block py-2 text-tech-dark hover:text-tech-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#soluciones" 
              className="block py-2 text-tech-dark hover:text-tech-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluciones
            </a>
            <a 
              href="#especialidades" 
              className="block py-2 text-tech-dark hover:text-tech-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Especialidades
            </a>
            <a 
              href="#contacto" 
              className="block py-2 text-tech-dark hover:text-tech-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <Button className="w-full bg-tech-blue hover:bg-tech-blue/80">
              Consulta Gratis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
