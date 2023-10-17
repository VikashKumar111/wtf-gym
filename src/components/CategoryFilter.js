import React, { useState } from 'react';

const CategoryFilter = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const filteredProducts = selectedCategory === 'ALL' ? products : products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryClick('ALL')}>ALL</button>
        <button onClick={() => handleCategoryClick('Pro')}>Pro</button>
        <button onClick={() => handleCategoryClick('ELITE')}>ELITE</button>
        <button onClick={() => handleCategoryClick('LUXE')}>LUXE</button>
      </div>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
