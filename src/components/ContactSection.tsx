
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Formulario enviado",
        description: "Nos contactaremos contigo pronto.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding bg-tech-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Interesado en nuestros servicios? Complete el formulario a continuación y un especialista se pondrá en contacto con usted para discutir sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Tu número telefónico"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-blue/80"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-2 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <address className="not-italic text-gray-600">
                      Av. Tecnología 1234<br />
                      Ciudad Innovación, CP 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-2 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contacto@techretail.com" className="text-tech-blue hover:underline">
                      contacto@techretail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-tech-blue/10 p-2 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <a href="tel:+5212345678" className="text-tech-blue hover:underline">
                      +52 123 456 78
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tech-blue text-white rounded-xl shadow-md p-6 lg:p-8">
              <h3 className="text-xl font-bold mb-3">Consulta gratuita</h3>
              <p className="mb-4">
                Ofrecemos una consulta inicial gratuita para evaluar sus necesidades y proponer soluciones adaptadas a su negocio.
              </p>
              <Button variant="outline" className="w-full text-tech-blue bg-white hover:bg-white/90">
                Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
