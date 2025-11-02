
import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, Check, SlidersHorizontal } from 'lucide-react'; // 'SlidersHorizontal' add karein
import './ProductGrid.css';
import ProductCard from './ProductCard';

// ... (Aapka poora 'products' array yahaan hona chahiye)
const products = [
  {id: 1, name: "PPXOC MILKYWAY DRESS IN PRESSED FLOWERS", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/front-pic-1.png", hoverImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/hover-pic-1.png", hasHover: true},
  {id: 2, name: "PPXOC MILKYWAY DRESS IN PRESSED FLOWERS", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/front-pic-2.png", hoverImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/hover-pic-2.png", hasHover: true},
  {id: 3, name: "PRODUCT NAME", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/rectangle-29438-15.png", hoverImage: null, hasHover: false},
  {id: 4, name: "PRODUCT NAME", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/rectangle-29438-14.png", hoverImage: null, hasHover: false},
  {id: 5, name: "PRODUCT NAME", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/rectangle-29438-12.png", hoverImage: null, hasHover: false},
  {id: 6, name: "PRODUCT NAME", frontImage: "https://c.animaapp.com/mhgm0rquNKVIHr/img/hover-pic-2.png", hoverImage: null, hasHover: false},
];

const sortOptions = ["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE : HIGH TO LOW", "PRICE : LOW TO HIGH"];

// Ab props se 'showFilters' aur 'setShowFilters' lein
const ProductGrid = ({ showFilters, setShowFilters }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  return (
    <section className="product-grid-wrapper">
      <div className="product-grid-header">
        <span className="product-count">3425 ITEMS</span>
        
        {/* Is button ko click karne par state toggle hoga */}
        <button 
          className="filter-toggle-btn"
          onClick={() => setShowFilters(!showFilters)} // State ko toggle karein
        >
          {/* Mobile par 'FILTER' icon dikhayein */}
          <SlidersHorizontal size={16} className="filter-icon" />
          
          {/* Text ko badlein (SHOW/HIDE) */}
          <span>{showFilters ? 'HIDE FILTER' : 'FILTER'}</span>
        </button>

        <div className="sort-wrapper">
          <button 
            className="sort-btn" 
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            <span>{selectedSort}</span>
            <ChevronDown size={20} className={isSortOpen ? 'chevron-open' : ''} />
          </button>
          {isSortOpen && (
            <div className="sort-dropdown">
              {sortOptions.map((option) => (
                <button 
                  key={option} 
                  className="sort-option"
                  onClick={() => handleSortSelect(option)}
                >
                  {selectedSort === option && <Check size={16} />}
                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="products-layout">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;