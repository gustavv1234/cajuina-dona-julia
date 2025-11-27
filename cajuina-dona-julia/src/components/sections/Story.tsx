import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Story: React.FC = () => {
  const { isVisible, domRef } = useScrollAnimation(0.2);

  return (
    <section 
      id="sobre" 
      className="py-16 sm:py-20 bg-gradient-to-br from-white to-amber-50"
      ref={domRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content - LEFT SIDE */}
          <div className={`text-center lg:text-left order-2 lg:order-1 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Section Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 border border-amber-200 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Nossa História</span>
            </div>

            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-black text-amber-900 mb-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Tradição que <span className="text-amber-600">conquista gerações</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p 
                className={`text-lg text-amber-700 leading-relaxed transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Desde <span className="font-bold text-amber-600">1957</span>, a Cajuína Dona Júlia mantém viva 
                a tradição do verdadeiro sabor do Piauí. 
              </p>
              <p 
                className={`text-lg text-amber-700 leading-relaxed transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Com receita familiar passada de geração em geração, preservamos a 
                autenticidade da cajuína artesanal, levando o melhor do nosso estado 
                para todo o Brasil.
              </p>
            </div>
            
            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-2">65+</div>
                <div className="text-xs sm:text-sm font-medium text-amber-700">Anos de Tradição</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-2">100%</div>
                <div className="text-xs sm:text-sm font-medium text-amber-700">Natural</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-2">🏆</div>
                <div className="text-xs sm:text-sm font-medium text-amber-700">Qualidade</div>
              </div>
            </div>

            {/* Values */}
            <div 
              className={`space-y-3 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4 text-center lg:text-left">
                Nossos Valores
              </h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                {[
                  { icon: '🌱', text: 'Tradição familiar' },
                  { icon: '❤️', text: 'Feito com amor' },
                  { icon: '🎯', text: 'Qualidade' }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-amber-700 bg-amber-50 px-4 py-3 rounded-xl border border-amber-200 transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-xl">{value.icon}</span>
                    <span className="font-medium">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Illustration - RIGHT SIDE */}
          <div 
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="w-full max-w-sm lg:max-w-md transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-300">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-4 animate-float">🏭</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4">
                    Tradição Piauiense
                  </h3>
                  <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                    Fabricada com carinho no coração do Piauí, mantendo viva 
                    a cultura e os sabores da nossa terra.
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Small decorative bottle */}
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="relative animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-12 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-lg relative shadow-lg">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-300 rounded-t-lg"></div>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-amber-700 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-300 blur-sm rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;