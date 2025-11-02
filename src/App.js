
import React, { useState } from 'react'; // useState import karein
import './App.css';
import Header from './components/Header';
import CategoryFilterSection from './components/CategoryFilterSection';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  // Naya state mobile par filters ko hide/show karne ke liye
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <CategoryFilterSection />
      
      <div className="main-content">
        
        {/* CSS class ko dynamically set karein.
          Agar showFilters false hai, toh 'filters-hidden' class add hogi.
        */}
        <aside className={`sidebar-container ${!showFilters ? 'filters-hidden' : ''}`}>
          <Filters />
        </aside>

        <main className="product-grid-container">
          <ProductGrid 
            // Yeh state ProductGrid ko bhej rahe hain taaki button kaam kare
            showFilters={showFilters} 
            setShowFilters={setShowFilters} 
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;