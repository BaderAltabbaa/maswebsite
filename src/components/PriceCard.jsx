import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const PriceCard = ({ title, description, price, priceSpan, features }) => {
  
  const { t } = useTranslation(); 

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`price-card ${inView ? 'animate' : ''}`}
    >
    
      <div className="top-section">
        <h3 className="price-card-title">{title}</h3>
        <p className="price-card-description">{description}</p>
      </div>

     
      <div className="mid-section">
        <span className="price">{price}</span>
        <span className="price-span">{priceSpan}</span>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      
      <div className="bottom-section">
        <button className="get-started-btn">{t('price.btn')}</button>
      </div>
    </div>
  );
};

export default PriceCard;
