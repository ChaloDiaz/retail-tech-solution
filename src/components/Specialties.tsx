
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Database, 
  Globe, 
  LineChart, 
  MonitorSmartphone, 
  ShoppingBag, 
  ShoppingCart, 
  Store, 
  Truck 
} from "lucide-react";

const Specialties = () => {
  return (
    <section id="especialidades" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Especialidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos especializamos en crear soluciones tecnológicas específicas para los sectores de retail y e-commerce,
            ayudando a nuestros clientes a optimizar operaciones y potenciar el crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-1 md:col-span-3 bg-gradient-to-r from-tech-blue/10 to-blue-400/10 border-0 shadow-md overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Store className="h-24 w-24 text-tech-blue mx-auto" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Retail</h3>
                  <p className="text-gray-700 mb-4">
                    El comercio minorista está evolucionando rápidamente con la integración de tecnologías digitales. 
                    Ayudamos a las empresas de retail a adaptarse al nuevo entorno comercial con soluciones que 
                    mejoran la experiencia del cliente y optimizan las operaciones en tienda.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Gestión de tiendas</span>
                    </div>
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Control de inventario</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Análisis de ventas</span>
                    </div>
                    <div className="flex items-center">
                      <LineChart className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Predicción de demanda</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-3 bg-gradient-to-r from-blue-400/10 to-tech-blue/10 border-0 shadow-md overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:order-2">
                  <ShoppingCart className="h-24 w-24 text-tech-blue mx-auto" />
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">E-commerce</h3>
                  <p className="text-gray-700 mb-4">
                    En el competitivo mundo del comercio electrónico, la experiencia del usuario y la eficiencia operativa son clave. 
                    Desarrollamos soluciones e-commerce personalizadas que impulsan las ventas y mejoran la satisfacción del cliente.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Tiendas online</span>
                    </div>
                    <div className="flex items-center">
                      <MonitorSmartphone className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Diseño responsive</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Logística integrada</span>
                    </div>
                    <div className="flex items-center">
                      <ShoppingCart className="h-5 w-5 text-tech-blue mr-2" />
                      <span className="text-sm">Optimización de conversión</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
