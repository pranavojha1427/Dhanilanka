import React from 'react';
import { menuData } from './menuData';
import './FullMenu.css';

export default function FullMenu({ goBack }) {
  const MenuSection = ({ title, items }) => (
    <div className="menu-category">
      <h2 className="category-title">{title}</h2>
      <div className="menu-items-grid">
        {items.map((item, index) => (
          <div key={index} className="menu-item-row">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="full-menu-page">
      <div className="menu-header">
        <button className="back-btn" onClick={goBack}>← Back to Home</button>
        <h1>Dhanilanka Complete Menu</h1>
      </div>
      
      <div className="menu-container">
        <MenuSection title="Indian Main Course (Veg)" items={menuData.indianMainCourseVeg} />
        <MenuSection title="Indian Main Course (Non-Veg)" items={menuData.indianMainCourseNonVeg} />
        <MenuSection title="Rice / Pulao / Biryani" items={menuData.ricePulaoBiryani} />
        <MenuSection title="Tandoori Starters" items={menuData.tandooriStarters} />
        <MenuSection title="Choice of Chinese" items={menuData.chinese} />
        <MenuSection title="Beverages & Mocktails" items={menuData.beverages} />
      </div>
    </div>
  );
}