// Estas importações devem funcionar após instalar shadcn
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface Product {
  id: string;
  name: string;
  img: string;
  desc: string;
  color: string;
  features: string[];
  size: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Cajuína Dona Júlia 200ml",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    desc: "Ideal para levar e beber geladinho! Perfeito para o dia a dia.",
    color: "#FBBF24",
    size: "200ml",
    features: ["Portátil", "Individual", "Prático"]
  },
  {
    id: "2",
    name: "Cajuína Dona Júlia 400ml",
    img: "https://images.unsplash.com/photo-1512568400610-3f3f73bed512?w=400&h=500&fit=crop&crop=center",
    desc: "Perfeita para compartilhar em família. Sabor autêntico em novo tamanho.",
    color: "#F59E0B",
    size: "400ml",
    features: ["Família", "Compartilhar", "Econômico"]
  },
  {
    id: "3",
    name: "Cajuína Dona Júlia 500ml",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&crop=center",
    desc: "O sabor tradicional do Piauí, puro suco clarificado, sem álcool e sem glúten.",
    color: "#D97706",
    size: "500ml",
    features: ["Tradicional", "Premium", "Clássico"]
  },
  {
    id: "4",
    name: "Cajuína Dona Júlia 1L",
    img: "https://images.unsplash.com/photo-1598170750595-3694149f9658?w=400&h=500&fit=crop&crop=center",
    desc: "Família completa! Sabor tradicional em embalagem econômica e familiar.",
    color: "#B45309",
    size: "1 Litro",
    features: ["Família", "Econômico", "Grande"]
  },
  {
    id: "5",
    name: "Kit Festa 6 Unidades",
    img: "https://images.unsplash.com/photo-1574651351432-274b7d979d3d?w=400&h=500&fit=crop&crop=center",
    desc: "Pacote com 6 unidades de 200ml. Ideal para festas e eventos.",
    color: "#F59E0B",
    size: "Kit 6un",
    features: ["Festa", "Kit", "Promocional"]
  },
  {
    id: "6",
    name: "Cajuína Dona Júlia 350ml",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    desc: "Tamanho perfeito para presentear. Elegante e saborosa.",
    color: "#F59E0B",
    size: "350ml",
    features: ["Presente", "Elegante", "Especial"]
  }
];

const Products: React.FC = () => {
  const { isVisible, domRef } = useScrollAnimation(0.2);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="produtos"
      className="py-20 bg-linear-to-b from-white to-amber-50 relative overflow-hidden"
      ref={domRef}
    >
      {/* Animated Background Elements */}
      <div
        className={`absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4 border border-amber-200 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Nossa Linha</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-amber-900 mb-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossos <span className="text-amber-600">Produtos</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Conheça nossa linha completa de cajuínas artesanais. Mais de 65 anos de tradição
            em cada gota. Entre em contato para saber mais!
          </p>
        </div>

        {/* Products Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={product.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="p-2 h-full group"
                  >
                    <Card
                      className={`h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:scale-105 group-hover:-translate-y-2 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        transitionDelay: `${300 + index * 100}ms`,
                      }}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Animated Badge */}
                        <div
                          className={`absolute top-4 left-4 z-10 transition-all duration-500 delay-500 ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                          }`}
                        >
                          <span className="bg-linear-to-r from-amber-500 to-amber-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                            {product.size}
                          </span>
                        </div>

                        {/* Image Container */}
                        <div
                          className="w-full h-64 relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${product.color}15, ${product.color}25)`
                          }}
                        >
                          <div className="absolute inset-0 bg-linear-to-t from-white/50 to-transparent z-10"></div>
                          
                          {/* Imagem corrigida - sem lazy loading por enquanto */}
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center">
                            <button
                              onClick={scrollToContact}
                              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-amber-600 px-6 py-3 rounded-full font-semibold shadow-2xl hover:scale-105 border border-amber-200"
                            >
                              Consultar Preço
                            </button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-black text-amber-900 mb-3 text-center leading-tight">
                            {product.name}
                          </h3>

                          <div className="w-12 h-1 bg-linear-to-r from-amber-400 to-amber-500 rounded-full mx-auto mb-4"></div>

                          <p className="text-amber-700 leading-relaxed mb-4 flex-1 text-center">
                            {product.desc}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {product.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200 transition-all duration-300 hover:scale-105 hover:bg-amber-200"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Quality Tags */}
                          <div className="flex justify-center gap-1 mb-4">
                            {['🌱', '🚫', '🌾'].map((icon, idx) => (
                              <div
                                key={idx}
                                className="w-8 h-8 bg-white border border-amber-200 rounded-full flex items-center justify-center text-sm shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                                title={icon === '🌱' ? '100% Natural' : icon === '🚫' ? 'Sem Álcool' : 'Sem Glúten'}
                              >
                                {icon}
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <button
                            onClick={scrollToContact}
                            className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-xl font-black hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group-hover:scale-105 border border-amber-400/50"
                          >
                            Consultar Disponibilidade
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div
              className={`flex justify-center gap-4 mt-12 transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CarouselPrevious className="static h-14 w-14 rounded-full bg-white hover:bg-amber-50 shadow-xl border border-amber-200 hover:border-amber-300 transform hover:scale-110 transition-all duration-300" />
              <CarouselNext className="static h-14 w-14 rounded-full bg-white hover:bg-amber-50 shadow-xl border border-amber-200 hover:border-amber-300 transform hover:scale-110 transition-all duration-300" />
            </div>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-3xl p-8 shadow-2xl border border-amber-400/50 transform hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Interessado em nossos produtos?
            </h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato conosco pelas redes sociais para consultar preços,
              disponibilidade e fazer encomendas. Atendimento personalizado!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-black hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Falar com Vendedor
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-black hover:bg-white hover:text-amber-600 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;