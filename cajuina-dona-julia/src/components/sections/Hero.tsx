import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useParallax } from '../../hooks/useParallax';

const Hero: React.FC = () => {
  const { isVisible, domRef } = useScrollAnimation(0.3);
  const parallaxOffset = useParallax(0.3);

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

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-400 to-orange-400"
      ref={domRef}
    >
      {/* Background Pattern with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 to-transparent"></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - LEFT SIDE */}
          <div className={`text-center lg:text-left text-white order-2 lg:order-1 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Animated Badge */}
            <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Tradição desde 1957</span>
            </div>

            {/* Animated Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="block text-white drop-shadow-lg">Cajuína</span>
              <span className="block text-amber-100 drop-shadow-lg">Dona Júlia</span>
            </h1>
            
            {/* Animated Description */}
            <p className={`text-lg sm:text-xl text-amber-100 leading-relaxed mb-8 max-w-2xl drop-shadow-lg transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              O sabor autêntico do Piauí em cada gota. Tradição familiar que conquista 
              paladares há mais de 65 anos.
            </p>

            {/* Animated Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="group bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Conhecer Produtos</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Nossa História
              </button>
            </div>

            {/* Animated Features */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-3 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: '🌱', text: '100% Natural' },
                { icon: '🚫', text: 'Sem Álcool' },
                { icon: '🌾', text: 'Sem Glúten' },
                { icon: '⭐', text: 'Qualidade Premium' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${1000 + index * 100}ms`,
                    animationDelay: `${1000 + index * 100}ms`
                  }}
                >
                  <span className="text-sm">{feature.icon}</span>
                  <span className="text-amber-100 font-medium text-xs sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottle Illustration - RIGHT SIDE with Parallax */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div 
              className="relative"
              style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
            >
              <div className="animate-float">
                <div className="w-48 h-96 sm:w-56 sm:h-[28rem] lg:w-64 lg:h-[32rem]">
                  {/* Bottle Shadow */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-4 bg-black/20 blur-xl rounded-full"></div>
                  
                  {/* Bottle Glass Effect */}
                  <div className="relative">
                    {/* Bottle Neck */}
                    <div className="w-16 sm:w-20 h-20 sm:h-24 bg-gradient-to-b from-white/40 to-amber-200/30 mx-auto rounded-t-2xl relative z-10 shadow-2xl backdrop-blur-sm border border-white/30">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 h-1 bg-white/50 rounded-full"></div>
                    </div>
                    
                    {/* Bottle Body */}
                    <div className="w-40 sm:w-48 lg:w-56 h-72 sm:h-80 lg:h-96 bg-gradient-to-b from-amber-200/40 to-amber-300/30 mx-auto -mt-2 rounded-[2rem] rounded-t-2xl flex items-center justify-center relative shadow-2xl backdrop-blur-sm border border-white/30">
                      {/* Liquid Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-amber-600/40 to-amber-400/20 rounded-b-[2rem]"></div>
                      
                      {/* Animated Label */}
                      <div className={`bg-white/90 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl rotate-[-5deg] shadow-2xl border border-white/50 relative z-20 transition-all duration-1000 delay-800 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-black text-amber-700 mb-1 sm:mb-2 tracking-wide">CAJUÍNA</div>
                          <div className="text-base sm:text-lg lg:text-xl font-bold text-amber-800 mb-1">Dona Júlia</div>
                          <div className="text-xs text-amber-600 font-medium tracking-wider">DESDE 1957</div>
                          <div className="w-12 sm:w-16 h-1 bg-amber-500 rounded-full mx-auto mt-1 sm:mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-300 rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-4 sm:w-6 h-4 sm:h-6 bg-orange-300 rounded-full blur-sm opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('produtos')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2">Descobrir</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 group-hover:animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;