import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { isVisible, domRef } = useScrollAnimation(0.1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialIcons = [
    { icon: '📱', label: 'Instagram' },
    { icon: '📷', label: 'Facebook' },
    { icon: '📘', label: 'WhatsApp' }
  ];

  const products = ['200ml', '400ml', '500ml', '1 Litro', 'Kit Festa'];
  const companyLinks = [
    { label: 'Nossa História', section: 'sobre' },
    { label: 'Valores', section: 'sobre' },
    { label: 'Contato', section: 'contato' }
  ];

  return (
    <footer 
      id="contato" 
      className="bg-linear-to-br from-amber-900 to-amber-950 text-white overflow-hidden"
      ref={domRef}
    >
      {/* Animated Background Elements */}
      <div 
        className={`absolute top-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>
      <div 
        className={`absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div 
                className={`flex items-center gap-3 text-2xl font-bold mb-4 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                  <span className="text-white text-lg">🥤</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold opacity-90">Cajuína</div>
                  <div className="text-base">Dona Júlia</div>
                </div>
              </div>
              <p 
                className={`text-amber-200 mb-4 text-sm leading-relaxed transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Tradição e qualidade desde 1957. O verdadeiro sabor do Piauí em cada gota.
              </p>
              <div 
                className={`flex gap-3 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {socialIcons.map((social, index) => (
                  <button 
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-sm sm:text-base"
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-amber-400 font-semibold mb-4 text-lg">Produtos</h4>
              <div className="space-y-2">
                {products.map((product, index) => (
                  <button 
                    key={product}
                    onClick={() => scrollToSection('produtos')}
                    className={`block text-amber-200 hover:text-white transition-all duration-300 text-left w-full text-sm sm:text-base transform hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div 
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-amber-400 font-semibold mb-4 text-lg">Empresa</h4>
              <div className="space-y-2">
                {companyLinks.map((link, index) => (
                  <button 
                    key={link.label}
                    onClick={() => scrollToSection(link.section)}
                    className={`block text-amber-200 hover:text-white transition-all duration-300 text-left w-full text-sm sm:text-base transform hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div 
              className={`transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-amber-400 font-semibold mb-4 text-lg">Contato</h4>
              <div className="space-y-3 text-amber-200 text-sm sm:text-base">
                {[
                  { icon: '📞', text: '(86) 3222-0000' },
                  { icon: '📧', text: 'contato@cajuinadonajulia.com' },
                  { icon: '📍', text: 'Teresina - PI' },
                  { icon: '🕒', text: 'Seg - Sex: 8h às 18h' }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <span className="text-lg transform hover:scale-110 transition-all duration-300">{contact.icon}</span>
                    <span className="transform hover:translate-x-1 transition-all duration-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider with Animation */}
          <div 
            className={`border-t border-amber-700 pt-8 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p 
                className={`text-amber-300 text-sm sm:text-base transition-all duration-700 delay-900 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                &copy; 2024 Cajuína Dona Júlia. Todos os direitos reservados.
              </p>
              <p 
                className={`text-amber-400 text-xs sm:text-sm transition-all duration-700 delay-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                Feito com ❤️ no Piauí para todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-amber-400/30 rounded-full animate-float"></div>
      <div className="absolute top-10 right-20 w-4 h-4 bg-amber-300/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-500/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;