import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Story from './components/sections/Story';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Products />
          <Story />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;