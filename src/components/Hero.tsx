
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-tech-light py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Soluciones tecnológicas para <span className="hero-text-gradient">retail y e-commerce</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Especializados en programación, soporte técnico, almacenamiento de datos, desarrollo web y interfaces personalizadas para potenciar tu negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/80">
                Nuestras soluciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contactar ahora
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-tech-light rounded-lg p-4 flex items-center justify-center h-28">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="bg-tech-light rounded-lg p-4 flex items-center justify-center h-28">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <div className="bg-tech-light rounded-lg p-4 flex items-center justify-center h-28 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-tech-light rounded-lg p-4 flex items-center justify-center h-28">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="bg-tech-light rounded-lg p-4 flex items-center justify-center h-28">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
