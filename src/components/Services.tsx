
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code, Database, LayoutDashboard, Server, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-tech-blue" />,
      title: "Programación",
      description: "Desarrollo de software a medida para optimizar procesos de retail y e-commerce."
    },
    {
      icon: <Server className="h-10 w-10 text-tech-blue" />,
      title: "Soporte Técnico",
      description: "Asistencia y mantenimiento continuo para garantizar el funcionamiento óptimo de sus sistemas."
    },
    {
      icon: <Database className="h-10 w-10 text-tech-blue" />,
      title: "Almacenamiento de Datos",
      description: "Soluciones seguras y escalables para la gestión y almacenamiento de información crítica."
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-tech-blue" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos orientados a maximizar conversiones y experiencia de usuario."
    },
    {
      icon: <Settings className="h-10 w-10 text-tech-blue" />,
      title: "Bases de Datos",
      description: "Diseño e implementación de sistemas de bases de datos eficientes y seguros."
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-tech-blue" />,
      title: "Interfaces Personalizadas",
      description: "Diseño de interfaces intuitivas adaptadas a las necesidades específicas de cada cliente."
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para potenciar el crecimiento y la eficiencia de su negocio en el sector retail y e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-gray-200">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
